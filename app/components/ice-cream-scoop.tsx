"use client";

import { useId } from "react";

type Props = {
  color: string;
  className?: string;
  size?: number;
};

export function IceCreamScoop({ color, className = "", size = 40 }: Props) {
  const uid = useId().replace(/:/g, "");

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`scoop-grad-${uid}`} cx="35%" cy="35%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="70%" stopColor={color} stopOpacity="0.95" />
          <stop offset="100%" stopColor={color} stopOpacity="0.75" />
        </radialGradient>
      </defs>
      <circle
        cx="32"
        cy="32"
        r="22"
        fill={`url(#scoop-grad-${uid})`}
        stroke="rgba(212, 168, 83, 0.2)"
        strokeWidth="0.5"
      />
      <ellipse
        cx="26"
        cy="26"
        rx="6"
        ry="4"
        fill="rgba(255, 255, 255, 0.25)"
      />
    </svg>
  );
}
