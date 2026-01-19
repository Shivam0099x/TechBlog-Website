import { Post } from "@/types/posts";
import Image from "next/image";
import Link from "next/link";

export default async function RecentPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/posts/recent`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Recent Posts ");
  }

  const { posts }: { posts: Post[] } = await res.json();

  return (
    <div className="space-y-2 mb-10 ">
      <h2 className="text-white text-xl md:text-3xl sm:2xl font-semibold">
        Recent Posts
      </h2>
      {/* Recent Posts  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="group rounded-xl overflow-hidden bg-[#0B0B0B] border border-white/10 transition-all duration-300 hover:transition-y-1 hover:bg-white/20"
          >
            {/* imageee */}
            {post.coverImageUrl && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.coverImageUrl}
                  alt={post.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 "
                  fill
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
            )}
            {/* Content  */}
            <div className="space-y-6 p-5">
              <time className="text-xs text-gray-400">
                {new Date(post.createdAt).toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </time>
              <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-indigo-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <Link
                href={`/articles/${post.slug}`}
                className="inline-block text-sm hover:underline font-medium text-indigo-400"
              >
                Read Article →{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
