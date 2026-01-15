import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";

export default function Home() {
  return (
    <ContainerLayout>
      <h1 className="text-3xl lg:text-5xl xl:text-7xl text-center text-gray-200 tracking-wide leading-snug lg:leading-tight">
        <span className="font-bold">Welcome to TechBlogs</span> <br /> Discover Stories and Creative Ideas        
      </h1>
      <div className="py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image src="/images/about.png" alt="About Image " width={600} height={600}
            className="border rounded-2xl border-white/10"
            />
            {/* glow */}
            <div className="absolute -inset-4 blur-3xl bg-indigo-500/10 -z-10"></div>
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
}
