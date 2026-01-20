import BlogView from '@/components/blog-page/BlogView'
import PostViewSkeleton from '@/components/skeletons/PostViewSkeleton'
import getPostsBySlug from '@/server-actions/getPosts'
import { Suspense } from 'react'



export default async function PostViewPage({params}:{params:Promise<{slug:string}>}){
    
  const slug = (await params).slug
  const postPromise = getPostsBySlug(slug)
  return (
    <Suspense fallback={ <PostViewSkeleton/> }>
      <BlogView postPromise = {postPromise}/>
    </Suspense>
  )
}

