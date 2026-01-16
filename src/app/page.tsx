import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import RecentPosts from "@/components/home/RecentPosts";

export default function Home() {
  return (
    <ContainerLayout>
      <h1 className="text-3xl lg:text-5xl xl:text-7xl text-center text-gray-200 tracking-wide leading-snug lg:leading-tight">
        <span className="font-bold">
          Welcome to Tech
          <span className="bg-linear-to-r from-blue-600 to-primary bg-clip-text text-transparent">
            Blogs
          </span>{" "}
        </span>{" "}
        <br /> Discover Stories and Creative Ideas
      </h1>
      <div className="py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/images/about.png"
              alt="About Image "
              width={600}
              height={600}
              className="border rounded-2xl border-white/10"
            />
            {/* glow */}
            <div className="absolute -inset-4 blur-3xl bg-indigo-500/10 -z-10"></div>
          </div>
          {/* Content */}
          <div className="max-w-xl">
            <span className="text-indigo-400 tracking-widest uppercase text-sm">
              About Techblog
            </span>
            <h3 className="mt-3 text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-tight text-white">
              Simple Ways to Innovate your inner creative mind
            </h3>
            <p className="leading-relaxed text-gray-400 mt-6">
              This platform shares technical blogs, tutorials, and insights
              spanning frontend technologies, backend systems, DevOps, GenAI,
              cloud computing, and modern software practices, designed to
              educate, inspire, and support continuous learning in the tech
              ecosystem.
            </p>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-secondary-background border border-white/10 font-semibold text-gray-200 hover:bg-white/10 transition-colors"
              >
                Learn More <LuArrowRight />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <RecentPosts />
    </ContainerLayout>
  );
}
