import { FetchPostsResponse } from "@/types/posts"
import { useInfiniteQuery } from "@tanstack/react-query"
import {fetchPosts} from '@/services/posts'

const useInfinitePosts = ({limit}:{limit:number}) => {
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

export default useInfinitePosts
