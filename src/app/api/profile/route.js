import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";

export const GET = async (req) => {
  try {
    // Extract session information
    const session = await getSession({ req });
    if (!session) {
      throw new Error("No session found");
    }

    // Fetch the user data for the logged-in user
    const user = await prisma.User.findUnique({
      where: { email: session.user.email },
    });
    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify(
        { message: "SomeThing is wrong with fetching the user data" },
        { status: 500 }
      )
    );
  }
};
