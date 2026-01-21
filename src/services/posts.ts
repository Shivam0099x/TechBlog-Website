import { FetchPostsParams, FetchPostsResponse } from "@/types/posts";
import axios from "axios";
import { useEffect, useState } from "react";

export async function fetchPosts({pageParam, limit,} : FetchPostsParams):Promise<FetchPostsResponse>{
    const res = await axios.get("/api/posts",{
        params:{
            cursor:pageParam,
            limit,
        }
    })

    return res.data 
}


export async function deletePosts(postId:string){
    const res = await axios.delete(`/api/posts/${postId}`)

    return res.data
   
}


export function useDebounce<T>(value:T,delay = 300){
  const [debouncedValue,setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    return () =>clearTimeout(timer);
  },[value,delay]);

  return debouncedValue;
}

