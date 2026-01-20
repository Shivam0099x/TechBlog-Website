"use server"
import prisma from "@/lib/prisma"

const getPostsBySlug = async (slug:string) => {
    if(!slug){
        throw new Error("Slug is required!!")
    }

    const post = await prisma.post.findUnique({
        where:{slug},
        select:{
            id:true,
            title:true,
            content:true,
            coverImageUrl:true,
            excerpt:true,
            slug:true,
            createdAt:true,
             author:{
                select:{
                    id:true,
                    name:true,
                    image:true
                }
             }


        }
    })

    if(!post){
        return null
    }

    return post
}

export default getPostsBySlug
