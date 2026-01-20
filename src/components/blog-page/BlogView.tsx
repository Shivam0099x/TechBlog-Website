"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { LuPen, LuTrash } from "react-icons/lu";
// import 'global.css'

interface BlogViewProps {
  postPromise: Promise<{
    id: string;
    title: string;
    content: string;
    slug: string;
    excerpt: string;
    createdAt: string | Date;
    coverImageUrl: string;
    author: {
      id: string;
      name: string;
      image: string | null;
    };
  } | null>;
}

const BlogView = ({ postPromise }: BlogViewProps) => {
  const posts = use(postPromise);
  const {data:session} = authClient.useSession()
  const userId = session?.user.id
  return (
    <article className="max-w-3xl mx-auto py-20 px-6">
      {/* Article Header */}
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 ">
          {posts?.title}
        </h1>

        <div className="text-gray-400 text-md flex justify-start gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={posts?.author.image || ""}
              fill
              className="object-cover "
              alt="Author Image"
            ></Image>
          </div>
          <span>{posts?.author.name}</span>
          <span>•</span>
          <span>
            {" "}
            {new Date(posts?.createdAt as string).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </span>
        </div>
      </header>

      <div className="relative w-full mb-12 h-55 -z-5 sm:h-80 lg:h-105">
        <Image
          src={posts?.coverImageUrl as string}
          fill
          alt="Cover Image"
          className="object-cover rounded-2xl"
        ></Image>
      </div>

      {posts?.content && (
        <div
          className="max-w-none text-gray-400 leading-relaxed tracking-wide blog-posts my-3 font-semibold"
          dangerouslySetInnerHTML={{ __html: posts.content }}
        />
      )}
      <div className="border-t my-16 border-white/10" />


      {userId === posts?.author.id && (
      <div className="flex justify-end items-center gap-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-indigo-400 border border-indigo-400/20 hover:border-indigo-400/40 hover:bg-indigo-400/10 transition"
        >
          {" "}
          <LuPen /> Edit
        </Link>
        <button
          type="button"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-red-400 border border-red-400/20 hover:border-red-400/40 hover:bg-red-400/10 transition cursor-pointer disabled:cursor-not-allowed"
        >
          {" "}
          <LuTrash /> Delete
        </button>
      </div>
      )}

      <div className="mt-16">
        <Link
          href="/articles"
          className="text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {" "}
          ← Back to all articles
        </Link>
      </div>
    </article>
  );
};

export default BlogView;
