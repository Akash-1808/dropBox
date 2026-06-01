import { getDb } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    try {
        const { userId } = await auth();
        if (!userId) {
            return NextResponse.json({ error: "Unauthorized" }, {
                status: 401
            });
        }

        const searchParams = request.nextUrl.searchParams;
        const fileId = searchParams.get("fileId");

        if (!fileId) {
            return NextResponse.json({ error: "File ID is required" }, {
                status: 400
            });
        }

    const db = getDb();

    // Update file logic here, e.g., updating metadata or restoring from trash

    const updatedFile = await db.update(files)
            .set({ isTrash: true }) 
            .where(and(eq(files.id, fileId), eq(files.userId, userId)));

        if (!updatedFile) {
            return NextResponse.json({ error: "File not found or update failed" }, {
                status: 404
            });
        }

        return NextResponse.json(updatedFile);
    } catch (error) {
        console.error("Error updating file:", error);
        return NextResponse.json({
            error: "Error during file update",
            details: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}