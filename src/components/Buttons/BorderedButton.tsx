// /src/components/Buttons/BorderedButton.tsx

"use client";

import { IButton } from "@/types/IButton";

export default function BorderedButton({
  text,
  onClick,
  className = "",
  type = "button",
}: IButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        group relative inline-flex items-center justify-center rounded-full
        bg-primary-gradient p-1px cursor-pointer
        text-white transition-transform duration-50 active:scale-95
        ${className}
      `}
    >
      <span className="absolute inset-px rounded-full bg-black opacity-100 transition-opacity duration-300 group-hover:opacity-0" />
      <span className="relative z-10 block rounded-full px-4 lg:px-[48px] pt-[14px] pb-[16px] lg:pt-[22px] lg:pb-[24px] font-medium font-sans tracking-wide text-[18px] lg:text-[24px]">
        {text}
      </span>
    </button>
  );
}
