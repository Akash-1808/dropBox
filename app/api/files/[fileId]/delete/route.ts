import { db } from "@/lib/db";
import { files } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { and, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
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

        // Logic to delete the file from the database
        // Assuming db is already imported and configured
        const deletedFile = await db
            .delete(files)
            .where(
                and(
                    eq(files.id, fileId),
                    eq(files.userId, userId)
                )
            );

        if (deletedFile.rowCount === 0) {
            return NextResponse.json({ error: "File not found or unauthorized" }, {
                status: 404
            });
        }

        return NextResponse.json({ message: "File deleted successfully" });

    } catch (error) {
        console.error("Error deleting file:", error);
        return NextResponse.json({
            error: "Error during file deletion",
            details: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}