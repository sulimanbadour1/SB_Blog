import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const project = await prisma.project.update({
      where: { slug },
      data: {
        views: {
          increment: 1,
        },
      },
      include: {
        user: true,
      },
    });
    return new NextResponse(JSON.stringify(project, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
