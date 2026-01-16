import Image from "next/image";
import Link from "next/link";

export default function Socials() {
  const socials = ["/socials_1.png", "/socials_2.png"];
  return (
    <div className="flex flex-row gap-8 items-center">
      {socials.map((item, i) => (
        <Link href="#" key={`s-${i}`}>
          <Image
            src={item}
            width={64}
            height={64}
            alt=""
            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[48px] lg:h-[48px] xl:w-[64px] xl:h-[64px] hover:opacity-80 transition-opacity"
          />
        </Link>
      ))}
    </div>
  );
}
