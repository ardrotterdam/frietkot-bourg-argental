"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import * as THREE from "three";

const LINES = [
  { t: 0, text: "Depuis 1990." },
  { t: 0.8, text: "La méthode belge." },
  { t: 1.6, text: "À Bourg-Argental." },
] as const;

function Steam(pcount: number) {
  const positions = new Float32Array(pcount * 3);
  for (let i = 0; i < pcount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 0.4;
    positions[i * 3 + 1] = -0.1 + Math.random() * 0.05;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0xcccccc,
    size: 0.02,
    transparent: true,
    opacity: 0.4,
  });
  return new THREE.Points(geo, mat);
}

export default function HeroTransformation() {
  const mount = useRef<HTMLDivElement | null>(null);
  const [reduced, setReduced] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const raf = useRef<number | null>(null);
  const clock = useRef(0);

  const startTime = useRef(0);
  const sceneRef = useRef<{
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    group: THREE.Group;
    steam: THREE.Points;
  } | null>(null);

  const tick = useCallback(() => {
    const s = sceneRef.current;
    if (!s) {
      return;
    }
    const t = (performance.now() - startTime.current) * 0.001;
    clock.current = t;
    s.group.rotation.y = t * 0.5;
    s.group.rotation.x = Math.sin(t * 0.4) * 0.12;
    s.camera.position.z = 2.2 - Math.min(t, 1.2) * 0.4;
    const st = s.steam.geometry.getAttribute("position") as THREE.BufferAttribute;
    for (let i = 0; i < st.count; i++) {
      st.setY(i, st.getY(i) + 0.004 + Math.random() * 0.002);
      if (st.getY(i) > 1.2) {
        st.setY(i, -0.1);
      }
    }
    st.needsUpdate = true;
    s.renderer.render(s.scene, s.camera);

    if (t < 4) {
      let i = 0;
      for (let k = 0; k < LINES.length; k++) {
        if (t >= LINES[k].t) {
          i = k;
        }
      }
      setLineIdx(i);
      if (t >= 2.4) {
        setShowLogo(true);
      }
    }
    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
  }, []);

  useEffect(() => {
    if (reduced || !mount.current) {
      return;
    }

    const w = mount.current.clientWidth;
    const h = mount.current.clientHeight;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    const camera = new THREE.PerspectiveCamera(42, w / h, 0.1, 100);
    camera.position.z = 2.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio));
    mount.current.appendChild(renderer.domElement);

    const group = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({
      color: 0xc9a24d,
      metalness: 0.55,
      roughness: 0.32,
    });
    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5 + i * 0.02, 0.1), mat);
      mesh.position.x = (i - 2) * 0.1;
      mesh.position.y = (i * 0.04) * 0.2;
      mesh.rotation.z = (i * 0.1) * 0.2;
      group.add(mesh);
    }
    const amb = new THREE.AmbientLight(0x444444, 0.4);
    const spot = new THREE.PointLight(0xf4b942, 1.1, 10);
    spot.position.set(0.5, 1, 0.5);
    scene.add(amb, spot, group);

    const steam = Steam(200);
    steam.position.set(0, -0.5, 0.2);
    scene.add(steam);

    sceneRef.current = { renderer, scene, camera, group, steam };
    startTime.current = performance.now();
    raf.current = requestAnimationFrame(tick);

    const onResize = () => {
      if (!mount.current) {
        return;
      }
      const el = mount.current;
      const cw = el.clientWidth;
      const ch = el.clientHeight;
      camera.aspect = cw / ch;
      camera.updateProjectionMatrix();
      renderer.setSize(cw, ch);
    };
    window.addEventListener("resize", onResize);

    return () => {
      if (raf.current) {
        cancelAnimationFrame(raf.current);
      }
      window.removeEventListener("resize", onResize);
      sceneRef.current = null;
      renderer.dispose();
      if (mount.current && renderer.domElement.parentNode === mount.current) {
        mount.current.removeChild(renderer.domElement);
      }
    };
  }, [reduced, tick]);

  if (reduced) {
    return (
      <div className="relative min-h-screen overflow-hidden bg-[#0a0a0a]">
        <div className="absolute inset-0">
          <Image
            src="/belgian-fries-hero-frietkot-bourg-argental.webp"
            alt=""
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-end gap-4 pb-16 text-center">
          <p className="section-eyebrow">Friterie belge · 1990</p>
          <h1
            className="max-w-4xl px-6 text-center font-[var(--font-fraunces)] text-[var(--font-hero,clamp(3.5rem,10vw,9rem))] italic leading-[1.02] text-[#f5efe3] font-variation-['opsz'_72] motion-reduce:transform-none"
            style={{ fontFeatureSettings: '"opsz" 72' }}
          >
            Le vrai goût de la Belgique, au cœur de la Loire.
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <div className="pointer-events-none absolute inset-0 z-10 [background:radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(0,0,0,0.1),rgba(0,0,0,0.55))]" />
      <div ref={mount} className="h-full w-full" />

      <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        {!showLogo &&
          LINES.map((l, i) => (
            <p
              key={l.text}
              className="absolute font-[var(--font-fraunces)] text-2xl italic text-[#f5efe3] transition-opacity duration-500 md:text-3xl"
              style={{
                opacity: lineIdx === i ? 0.9 : 0,
                fontFeatureSettings: '"opsz" 72',
              }}
            >
              {l.text}
            </p>
          ))}
        <div
          className="absolute top-[58%] transition-opacity duration-700"
          style={{ opacity: showLogo ? 1 : 0 }}
        >
          <Image
            src="/frietkot-bourg-argental-belgische-friet-logo.webp"
            alt="Frietkot"
            width={200}
            height={120}
            className="h-20 w-auto object-contain md:h-24"
            priority
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-10 left-1/2 z-20 -translate-x-1/2 text-center text-xs uppercase tracking-[0.3em] text-[#D4A853] motion-safe:[animation:scroll-hint-pulse_2.5s_ease-in-out_infinite] motion-reduce:opacity-0"
        style={{ opacity: showLogo ? 0.6 : 0.15 }}
        aria-hidden
      >
        <span className="block">La nuit belge</span>
        <span className="mt-3 block text-base">↓</span>
      </div>
    </div>
  );
}
