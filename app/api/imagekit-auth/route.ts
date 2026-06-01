import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import ImageKit from "imagekit";

export async function GET() {
    try {
        const {userId} = await auth()
        if(!userId){
           return NextResponse.json({error:"Unauthorized"},{
            status:401
           })
        }

        const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
        const privateKey = process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY;
        const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

        if (!publicKey || !privateKey || !urlEndpoint) {
            throw new Error("ImageKit environment variables are not set (NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY, NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY, NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT)");
        }

        const imagekit = new ImageKit({
            publicKey,
            privateKey,
            urlEndpoint,
        });

        const authParams = imagekit.getAuthenticationParameters()

        return NextResponse.json(authParams)
    } catch(error) {
        console.error("Error getting ImageKit auth parameters:", error);
        return NextResponse.json({
            error: "Internal server error",
            details: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        })
    }
}