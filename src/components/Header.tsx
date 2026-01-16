// /src/components/Header.tsx

"use client";
import BorderedButton from "./Buttons/BorderedButton";
import UnBorderedButton from "./Buttons/UnBorderedButton";

export default function Header() {
  return (
    <header className="flex items-center justify-center gap-0 sm:gap-8 py-[32px]">
      <UnBorderedButton
        text="LLM Leaderboard"
        onClick={() => console.log("Clicked!")}
      />

      <BorderedButton
        text="Buy Spice AI"
        onClick={() => console.log("Clicked!")}
      />
    </header>
  );
}
