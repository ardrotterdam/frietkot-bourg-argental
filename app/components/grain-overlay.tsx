"use client";

import { Camera, Mesh, Program, Renderer, Transform, Triangle, Vec2 } from "ogl";
import { useEffect, useRef, useState } from "react";

const vertex = /* glsl */ `
attribute vec2 position;
varying vec2 v_uv;
void main() {
  v_uv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = /* glsl */ `
precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_uv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float noise(in vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

void main() {
  vec2 p = v_uv * u_resolution / min(u_resolution.x, u_resolution.y);
  float t = u_time * 0.4;
  float n = noise(p * 180.0 + t);
  n += 0.5 * noise(p * 360.0 - t * 0.5);
  float g = 0.5 + 0.5 * n;
  gl_FragColor = vec4(vec3(g), 0.2);
}
`;

export default function GrainOverlay() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setActive(true);
  }, []);

  useEffect(() => {
    if (!active) {
      return;
    }

    const div = ref.current;
    if (!div) {
      return;
    }

    const renderer = new Renderer({
      dpr: Math.min(2, window.devicePixelRatio),
      alpha: true,
      depth: false,
    });
    const { gl } = renderer;
    const glCanvas = gl.canvas as HTMLCanvasElement;
    glCanvas.style.width = "100%";
    glCanvas.style.height = "100%";
    div.appendChild(glCanvas);

    const camera = new Camera(gl, { left: -1, right: 1, bottom: -1, top: 1, near: 0.1, far: 10 });
    camera.position.z = 1;

    const scene = new Transform();
    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: { u_time: { value: 0 }, u_resolution: { value: new Vec2() } },
      transparent: true,
      depthTest: false,
      cullFace: false,
    });
    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      renderer.setSize(w, h);
      program.uniforms.u_resolution.value.set(w, h);
    };
    resize();

    let raf: number;
    const tick = (t: number) => {
      program.uniforms.u_time.value = t * 0.001;
      mesh.updateMatrixWorld();
      camera.updateMatrixWorld();
      renderer.render({ scene, camera, frustumCull: false });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (div.contains(glCanvas)) {
        div.removeChild(glCanvas);
      }
    };
  }, [active]);

  if (!active) {
    return null;
  }

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[100] mix-blend-overlay opacity-[0.07]"
    />
  );
}
