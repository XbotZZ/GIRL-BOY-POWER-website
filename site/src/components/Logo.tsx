interface LogoProps {
  className?: string;
  variant?: "default" | "light";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const inkColor = variant === "light" ? "#FAF7F2" : "#1A1214";
  const innerCircle = variant === "light" ? "#FAF7F2" : "#1A1214";

  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="GIRL & BOY POWER - Spa & Bien-Etre"
    >
      <defs>
        <path
          id="topArc"
          d="M 96 256 A 160 160 0 0 1 416 256"
          fill="none"
        />
        <path
          id="bottomArc"
          d="M 96 256 A 160 160 0 0 0 416 256"
          fill="none"
        />
      </defs>

      {/* Outer circle */}
      <circle
        cx="256"
        cy="256"
        r="200"
        fill="none"
        stroke={inkColor}
        strokeWidth="2"
      />
      {/* Inner pink circle */}
      <circle
        cx="256"
        cy="256"
        r="118"
        fill="none"
        stroke="#F4A8B8"
        strokeWidth="2"
      />

      {/* Top text - GIRL & BOY POWER */}
      <text
        fill={inkColor}
        fontFamily="var(--font-heading), serif"
        fontSize="28"
        fontWeight="500"
        letterSpacing="3"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          GIRL &amp; BOY POWER
        </textPath>
      </text>

      {/* Bottom text - SPA & BIEN-ETRE */}
      <text
        fill={inkColor}
        fontFamily="var(--font-heading), serif"
        fontSize="22"
        fontWeight="500"
        letterSpacing="4"
      >
        <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
          SPA &amp; BIEN-ETRE
        </textPath>
      </text>

      {/* Central GBP monogram */}
      <text
        x="256"
        y="290"
        fill={inkColor}
        fontFamily="Georgia, 'Playfair Display', serif"
        fontSize="120"
        fontWeight="700"
        textAnchor="middle"
        fontStyle="italic"
      >
        GBP
      </text>

      {/* Pink feather (left) - stylized */}
      <g transform="translate(50, 220) rotate(-25)">
        <path
          d="M 0 0 Q 8 -25 18 -50 Q 22 -65 16 -78 Q 10 -68 6 -55 Q 12 -45 14 -32 Q 4 -22 -2 -8 Q 2 -3 0 0 Z"
          fill="#F4A8B8"
          opacity="0.85"
        />
        <path
          d="M 4 -20 Q 10 -10 14 0"
          stroke="#E89BAA"
          strokeWidth="1"
          fill="none"
        />
      </g>

      {/* Blue feather (right) - stylized */}
      <g transform="translate(462, 220) rotate(25)">
        <path
          d="M 0 0 Q -8 -25 -18 -50 Q -22 -65 -16 -78 Q -10 -68 -6 -55 Q -12 -45 -14 -32 Q -4 -22 2 -8 Q -2 -3 0 0 Z"
          fill="#5BB8E0"
          opacity="0.85"
        />
        <path
          d="M -4 -20 Q -10 -10 -14 0"
          stroke="#4DA8D0"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}
