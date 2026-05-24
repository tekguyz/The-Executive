"use client";

interface DiamondShieldIconProps {
  className?: string;
  id?: string;
}

export default function DiamondShieldIcon({ className, id = "diamond_shield_svg" }: DiamondShieldIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id={id}
    >
      <path
        d="M12 2L3 7V12C3 18 12 22 12 22C12 22 21 18 21 12V7L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.5L6.5 11.2V13.8C6.5 16.5 12 19.5 12 19.5C12 19.5 17.5 16.5 17.5 13.8V11.2L12 5.5Z"
        fill="currentColor"
        fillOpacity="0.3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
