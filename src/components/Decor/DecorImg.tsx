import Image from "next/image";

interface IDecorImg {
  imageSrc: string;
  className?: string;
  alt?: string;
}

export default function DecorImg({ imageSrc, className, alt = "" }: IDecorImg) {
  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={1016}
      height={1016}
      className={`w-full h-auto ${className || ""}`}
    />
  );
}
