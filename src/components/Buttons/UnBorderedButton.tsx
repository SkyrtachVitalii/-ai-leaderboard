// /src/components/Buttons/UnBorderedButton.tsx

"use client";

import { IButton } from "@/types/IButton";

export default function UnBorderedButton({
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
        group relative inline-flex items-center justify-center
        rounded-full cursor-pointer
        transition-transform duration-50 active:scale-95
        ${className}
      `}
    >
      <span 
        className="
          relative z-10 block rounded-full 

          px-4 lg:px-[48px] pt-[14px] pb-[16px] lg:pt-[22px] lg:pb-[24px] font-medium font-sans tracking-wide text-[18px] lg:text-[24px]
          
          group-hover:bg-primary-gradient
          group-hover:bg-clip-text
          group-hover:text-transparent
          
          transition-colors duration-300
        "
      >
        {text}
      </span>
    </button>
  );
}