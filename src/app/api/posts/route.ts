import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import slugify from "slugify";
import { headers } from "next/headers";
import {CloudinaryUploadResult, uploadToCloudinary } from "@/services/cloudinary";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return NextResponse.json({
        success: false,
        status: 404,
        message: `Unauthorized User`,
      });
    }

    const formData = await req.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    const excerpt = formData.get("excerpt") as string;
    const coverImage = formData.get("coverImage") as File;

    if (!title || !content || !excerpt || !coverImage) {
      return NextResponse.json({
        success: false,
        status: 400,
        message: `All fields are required`,
      });
    }

    // Generate Slug
    const baseSlug = slugify(title, {
      trim: true,
      lower: true,
      strict: true,
    });

    let slug = baseSlug;
    let counter = 1;
    // always generate unique slug
    while (await prisma.post.findUnique({ where: { slug } })) {
      slug = `${slug}-${counter}`;
      counter++;
    }

    // Upload CoverImage to cloudinary

    const imageData: CloudinaryUploadResult =
      await uploadToCloudinary(coverImage);

    const post = await prisma.post.create({
      data: {
        title,
        content,
        excerpt,
        slug,
        coverImagePublicId: imageData.public_id,
        coverImageUrl: imageData.secure_url,
        authorId: session.user.id,
      },
    });

    return NextResponse.json(post, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Error in POST Route Handleer ${error}`,
      status: 500,
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const DEFAULT_LIMIT = 3;

    const cursor = searchParams.get("cursor");

    const limit = Number(searchParams.get("limit")) || DEFAULT_LIMIT;

    const posts = await prisma.post.findMany({
      take: limit + 1,

      orderBy: {
        createdAt: "desc",
      },

      cursor: cursor ? { id: cursor } : undefined,
      skip: cursor ? 1 : 0,

      select: {
        id: true,
        title: true,
        content: true,
        excerpt: true,
        slug: true,
        createdAt: true,
        coverImageUrl: true,
      },
    });

    // Determine pagination
    const hasMore = posts.length > limit;
    const items = hasMore ? posts.slice(0, limit) : posts;
    const nextCursor = hasMore ? items[items.length - 1].id : null;

    return NextResponse.json({
      posts: items,
      nextCursor,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: `Error in GET Route Handler ${error}`,
      status: 500,
    });
  }
}
