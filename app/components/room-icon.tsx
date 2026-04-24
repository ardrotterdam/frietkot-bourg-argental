import type { ReactNode } from "react";

export type RoomIconType = "elephant" | "devil" | "plough";

type Props = {
  type: RoomIconType;
  color: string;
  className?: string;
};

export function RoomIcon({ type, color, className = "" }: Props) {
  const icons: Record<RoomIconType, ReactNode> = {
    elephant: (
      <svg
        viewBox="0 0 64 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M 18 40 C 14 38 12 34 14 30 C 16 24 22 22 26 24 C 28 20 32 18 38 20 C 46 22 50 28 48 34 C 50 36 50 42 48 44 L 46 46 L 44 44 L 42 48 L 38 48 L 38 44 L 30 44 L 30 48 L 26 48 L 26 44 C 22 44 20 44 18 40 Z M 50 32 C 52 30 54 32 53 34 C 52 36 50 34 50 32 Z"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="40" cy="30" r="1.2" fill={color} />
      </svg>
    ),
    devil: (
      <svg
        viewBox="0 0 64 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M 20 20 L 20 30 Q 20 44 32 48 Q 44 44 44 30 L 44 20 Z M 30 48 L 30 56 L 34 56 L 34 48 M 26 56 L 38 56"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M 22 18 L 19 10 L 24 14 M 42 18 L 45 10 L 40 14"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    plough: (
      <svg
        viewBox="0 0 64 64"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M 10 44 L 20 44 L 28 36 L 40 36 L 48 44 M 28 36 L 24 28 L 32 28 M 32 28 L 32 20 M 40 44 L 42 52 L 48 52 L 54 44"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M 14 20 L 14 28 M 12 22 L 14 24 M 16 22 L 14 24 M 12 25 L 14 27 M 16 25 L 14 27"
          fill="none"
          stroke={color}
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    ),
  };

  return <>{icons[type]}</>;
}
