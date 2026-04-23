"use client";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useMemo } from "react";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

const POS: [number, number] = [45.292, 4.555];

function ResizeRerender() {
  const map = useMap();
  useEffect(() => {
    const t = setTimeout(() => {
      map.invalidateSize();
    }, 80);
    return () => clearTimeout(t);
  }, [map]);
  return null;
}

export default function ContactMapClient() {
  const icon = useMemo(
    () =>
      L.divIcon({
        className: "bg-transparent",
        html: `<div style="width:18px;height:18px;border-radius:9999px;background:#D4A853;box-shadow:0 0 0 2px #0a0a0a,0 0 20px rgba(212,168,83,0.5)"></div>`,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
      }),
    [],
  );

  return (
    <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 md:h-96" data-cursor-cta>
      <MapContainer
        center={POS}
        zoom={16}
        scrollWheelZoom
        className="h-full w-full"
        style={{ minHeight: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> CARTO'
        />
        <Marker position={POS} icon={icon} />
        <ResizeRerender />
      </MapContainer>
    </div>
  );
}
