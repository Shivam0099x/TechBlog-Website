"use client";
import ContainerLayout from "@/Layouts/ContainerLayout";
import Image from "next/image";
import Link from "next/link";
import {useInfinitePosts} from "@/custom-hooks/usePosts";
import PostCardSkeleton from "@/components/skeletons/PostViewSkeleton";

const Page = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfinitePosts({ limit: 3 });

  if (status == "pending") {
    return (
      <ContainerLayout>
       <h2 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl">
          All Articles
        </h2>
        <PostCardSkeleton/>
      </ContainerLayout>
    );
  }

  if (status == "error") {
    return (
      <ContainerLayout>
        
        <p className="text-gray-300">Failed to Load Articles </p>
      </ContainerLayout>
    );
  }

  // console.log(data)
  const posts = data.pages.flatMap((page) => page.posts) ?? [];

  return (
    <ContainerLayout>
      <div className="space-y-2">
        <h2 className="text-white font-semibold text-xl sm:text-2xl md:text-3xl">
          All Articles
        </h2>

        {/* All articles */}
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

        {/* Load More Button */}
        {hasNextPage && (
          <div className="flex justify-center mt-10 ">
            <button onClick={()=>fetchNextPage()}
            disabled={isFetchingNextPage}
             className="border border-white/10 px-8 py-3 rounded-full  bg-secondary-background text-gray-200 font-medium text-sm hover:text-white hover:border-white/20 transition-all duration-300 cursor-pointer">
              {isFetchingNextPage?'Loading...':"Load More Articles"}
            </button>
          </div>
        )}
      </div>
    </ContainerLayout>
  );
};

export default Page;
