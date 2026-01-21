import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        excerpt: true,
        content: true,
        createdAt: true,
        coverImageUrl:true
      },
      take: 6,
    });

    return NextResponse.json(
      { posts },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: `Internal Server Error in Recent Post Route Handler ${error}`,
    });
  }
}
