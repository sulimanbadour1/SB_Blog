import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getSession } from "next-auth/react";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";
// Cookie data is fetched asynchronously
async function getCookieData() {
  const cookieData = cookies().getAll();
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(cookieData);
    }, 1000)
  );
}

// export default async function Page() {
//   const cookieData = await getCookieData();
//   return <div>Hello World</div>;
// }
// Path: src/app/api/profile/route.js

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
    if (!user) {
      throw new Error("User not found");
    }

    return new NextResponse(JSON.stringify(user, { status: 200 }));
  } catch (err) {
    // console.log("There is an Error", err);
    return new NextResponse(
      JSON.stringify(
        { message: "SomeThing is wrong with fetching the user data" },
        { status: 500 }
      )
    );
  }
};
