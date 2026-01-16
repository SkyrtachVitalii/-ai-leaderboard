import Image from "next/image";

export default function ProjectsCard({ image }: { image: string }) {
  return (
    <div className="relative overflow-hidden flex items-center shrink-0 
    h-14 pr-15 
    sm:h-17 sm:pr-20 
    md:h-19 md:pr-22.5 
    lg:h-21 lg:pr-24 
    xl:h-24 xl:pr-27.5 
    2xl:h-25.5 2xl:pr-30 
    ">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        sizes="100vw"
        className="w-auto h-full object-contain"
      />
    </div>
  );
}
