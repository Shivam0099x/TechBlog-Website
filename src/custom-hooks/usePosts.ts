import { FetchPostsResponse } from "@/types/posts"
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {deletePosts, fetchPosts} from '@/services/posts'
import { useRouter } from "next/navigation"
import axios from "axios"

export function useInfinitePosts({ limit }: { limit: number }) {
  return useInfiniteQuery<FetchPostsResponse>({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) =>
      fetchPosts({
        pageParam: pageParam as string | null,
        limit,
      }),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });
}


export function useDeletePost(){
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn:(postId:string) => deletePosts(postId),

    onSuccess:() => {
      queryClient.invalidateQueries({queryKey:["posts"]});

      router.replace("/articles");
    }, onError:(error) => {
         console.error("DELETE_POST_ERROR:", error);
      alert("Failed to delete post");
    }
  })
}


export async function searchPosts(query:string){
  if(!query) return [];

  const res = await axios.get("/api/posts/search",{
    params:{
      q:query
    }
  });

  return res.data.posts;
}

