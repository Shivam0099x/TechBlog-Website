import Image from "next/image";
import Link from "next/link";
import { LuPen, LuTrash } from "react-icons/lu";

const page = () => {
  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 ">
          Build a Medium Style Blog with Next.js{" "}
        </h1>

        <div className="text-gray-400 text-md flex justify-start gap-4">
          <span>By Shivam Patel</span>
          <span>•</span>
          <span>Sept 2, 2025</span>
        </div>
      </header>

      <div className="relative w-full mb-12 h-55 -z-5 sm:h-80 lg:h-105">
        <Image
          src="/images/p1.png"
          fill
          alt="Cover Image"
          className="object-cover rounded-2xl"
        ></Image>
      </div>

      {/* Article Content  */}
      <div className="max-w-none text-gray-400 leading-relaxed tracking-wide">
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          laboriosam veniam rerum est. Ab, id dolorum! Esse repellat nesciunt
          reprehenderit, optio eum iste illum quia adipisci minus facere
          exercitationem incidunt ratione ipsam nobis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda, tempora!
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          laboriosam veniam rerum est. Ab, id dolorum! Esse repellat nesciunt
          reprehenderit, optio eum iste illum quia adipisci minus facere
          exercitationem incidunt ratione ipsam nobis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda, tempora!
        </p>
        <p className="mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
          laboriosam veniam rerum est. Ab, id dolorum! Esse repellat nesciunt
          reprehenderit, optio eum iste illum quia adipisci minus facere
          exercitationem incidunt ratione ipsam nobis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Assumenda, tempora!
        </p>

        <div className="border-t my-16 border-white/10" />

        <div className="flex justify-end items-center gap-2">
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-indigo-400 border border-indigo-400/20 hover:border-indigo-400/40 hover:bg-indigo-400/10 transition"
          > <LuPen/> Edit</Link>
          <button type="button" className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-red-400 border border-red-400/20 hover:border-red-400/40 hover:bg-red-400/10 transition cursor-pointer disabled:cursor-not-allowed"> <LuTrash/> Delete</button>
        </div>

        <div className="mt-16">
          <Link href='/articles' className="text-indigo-400 hover:text-indigo-300 transition-colors"> ← Back to all articles</Link>
        </div>


      </div>
    </article>
  );
};

export default page;
