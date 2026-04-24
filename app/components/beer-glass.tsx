import type { GlassType } from "@/app/[locale]/bieres-belges/beers-data";

type Props = {
  type: GlassType;
  color: string;
  idPrefix: string;
  className?: string;
};

const foam = "#F5EFE8";
const stroke = "rgba(212, 168, 83, 0.45)";

function safeClipId(s: string) {
  return s.replace(/[^a-zA-Z0-9-]/g, "-");
}

export function BeerGlass({ type, color, idPrefix, className = "" }: Props) {
  const u = safeClipId(idPrefix);

  if (type === "chalice") {
    return (
      <svg
        viewBox="0 0 100 150"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <clipPath id={`${u}-c`}>
            <path d="M 20 32 Q 20 80 50 90 Q 80 80 80 32 L 20 32 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${u}-c)`}>
          <rect
            x="0"
            y="42"
            width="100"
            height="90"
            fill={color}
            fillOpacity={0.88}
          />
          <rect x="0" y="28" width="100" height="18" fill={foam} fillOpacity={0.95} />
        </g>
        <path
          d="M 20 32 Q 20 80 50 90 Q 80 80 80 32 L 20 32 Z M 20 32 L 80 32"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <line x1="45" y1="90" x2="45" y2="120" stroke={stroke} strokeWidth="1.2" />
        <line x1="55" y1="90" x2="55" y2="120" stroke={stroke} strokeWidth="1.2" />
        <line x1="32" y1="120" x2="68" y2="120" stroke={stroke} strokeWidth="1.2" />
      </svg>
    );
  }

  if (type === "tulip") {
    return (
      <svg
        viewBox="0 0 100 150"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <clipPath id={`${u}-t`}>
            <path d="M 25 28 L 25 50 Q 25 80 50 95 Q 75 80 75 50 L 75 28 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${u}-t)`}>
          <rect
            x="0"
            y="38"
            width="100"
            height="100"
            fill={color}
            fillOpacity={0.88}
          />
          <rect x="0" y="24" width="100" height="16" fill={foam} fillOpacity={0.95} />
        </g>
        <path
          d="M 25 28 L 25 50 Q 25 80 50 95 Q 75 80 75 50 L 75 28 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <line x1="48" y1="95" x2="48" y2="128" stroke={stroke} strokeWidth="1.1" />
        <line x1="52" y1="95" x2="52" y2="128" stroke={stroke} strokeWidth="1.1" />
        <line x1="32" y1="128" x2="68" y2="128" stroke={stroke} strokeWidth="1.1" />
      </svg>
    );
  }

  if (type === "goblet") {
    return (
      <svg
        viewBox="0 0 100 150"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <clipPath id={`${u}-g`}>
            <path d="M 28 28 L 28 85 Q 28 95 50 95 Q 72 95 72 85 L 72 28 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${u}-g)`}>
          <rect
            x="0"
            y="40"
            width="100"
            height="90"
            fill={color}
            fillOpacity={0.88}
          />
          <rect x="0" y="24" width="100" height="20" fill={foam} fillOpacity={0.95} />
        </g>
        <path
          d="M 28 28 L 28 85 Q 28 95 50 95 Q 72 95 72 85 L 72 28 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <line x1="48" y1="95" x2="48" y2="128" stroke={stroke} strokeWidth="1.1" />
        <line x1="52" y1="95" x2="52" y2="128" stroke={stroke} strokeWidth="1.1" />
        <line x1="32" y1="128" x2="68" y2="128" stroke={stroke} strokeWidth="1.1" />
      </svg>
    );
  }

  if (type === "kwak") {
    return (
      <svg
        viewBox="0 0 100 160"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <clipPath id={`${u}-k`}>
            <path d="M 40 25 L 40 88 Q 24 90 24 110 Q 24 132 50 135 Q 76 132 76 110 Q 76 90 60 88 L 60 25 Z" />
          </clipPath>
        </defs>
        <g clipPath={`url(#${u}-k)`}>
          <rect
            x="0"
            y="38"
            width="100"
            height="120"
            fill={color}
            fillOpacity={0.9}
          />
          <rect x="0" y="20" width="100" height="20" fill={foam} fillOpacity={0.95} />
        </g>
        <path
          d="M 40 25 L 40 88 Q 24 90 24 110 Q 24 132 50 135 Q 76 132 76 110 Q 76 90 60 88 L 60 25 Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1.4"
        />
        <line x1="40" y1="25" x2="60" y2="25" stroke={stroke} strokeWidth="1" />
        <line x1="50" y1="100" x2="50" y2="128" stroke={stroke} strokeWidth="1.1" />
        <line x1="32" y1="128" x2="68" y2="128" stroke={stroke} strokeWidth="1.1" />
      </svg>
    );
  }

  // flute
  return (
    <svg
      viewBox="0 0 100 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <clipPath id={`${u}-f`}>
          <path d="M 38 24 L 38 110 Q 38 115 50 115 Q 62 115 62 110 L 62 24 Z" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${u}-f)`}>
        <rect
          x="0"
          y="36"
          width="100"
          height="100"
          fill={color}
          fillOpacity={0.88}
        />
        <rect x="0" y="22" width="100" height="16" fill={foam} fillOpacity={0.95} />
      </g>
      <path
        d="M 38 24 L 38 110 Q 38 115 50 115 Q 62 115 62 110 L 62 24 Z"
        fill="none"
        stroke={stroke}
        strokeWidth="1.4"
      />
      <line x1="50" y1="115" x2="50" y2="135" stroke={stroke} strokeWidth="1" />
    </svg>
  );
}
