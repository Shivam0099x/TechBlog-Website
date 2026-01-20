import { FetchPostsResponse } from "@/types/posts"
import { useInfiniteQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import {deletePosts, fetchPosts} from '@/services/posts'
import { useRouter } from "next/navigation"

export const useInfinitePosts = ({limit}:{limit:number}) => {
  return useInfiniteQuery<FetchPostsResponse>({
    queryKey:["posts"],
    queryFn: ({pageParam})=> fetchPosts({
        pageParam:pageParam as string | null,
        limit
    }),
    initialPageParam : null,
    getNextPageParam: (lastPage)=> lastPage.nextCursor,
  })
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


