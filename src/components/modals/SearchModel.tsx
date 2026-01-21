"use client";
import { useDebounce } from "@/services/posts";
import Modal from "./Modal";
import { useModalStore } from "@/store/useModalStore";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { searchPosts } from "@/custom-hooks/usePosts";
import { useRouter } from "next/navigation";
import { Post } from "@/types/posts";

const SearchModel = () => {
  const { isSearchOpen, closeSearch } = useModalStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const router = useRouter();

  const {
    data: results = [],
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ["search-posts", debouncedQuery],
    queryFn: () => searchPosts(debouncedQuery),
    enabled: debouncedQuery.length > 1, //prevent useless requests
  });

  const handleNavigate = (slug: string) => {
    router.push(`/articles/${slug}`);
    closeSearch();
    setQuery("");
  };

  return (
    <Modal isOpen={isSearchOpen} onClose={closeSearch}>
      <div className="space-y-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          autoFocus
          placeholder="Search Articles "
          className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white text-lg outline-none hover:border-indigo-500"
        />
        <div className="divide divide-white/10 border border-white/10 max-h-80 overflow-y-auto rounded-xl ">
          {/* if is searching */}
          {(isLoading || isFetching) && (
            <div className="px-4 py-3 text-gray-400 text-sm">Searching...</div>
          )}

          {/* empty */}
          {!isLoading && debouncedQuery && results.length === 0 && (
            <div className="px-4 py-3 text-gray-400 text-sm">
              No results found!
            </div>
          )}

          {results.map((result: Post) => (
            <button
            onClick={()=>handleNavigate(result.slug)}
              key={result.id}
              className="w-full text-left px-4 py-3 text-gray-400 hover:bg-white/5 hover:text-white transition cursor-pointer"
            >
              {result.title}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SearchModel;
