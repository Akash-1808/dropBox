import {pgTable,text,uuid,integer, boolean, timestamp} from "drizzle-orm/pg-core"
import { relations } from "drizzle-orm"



export const files = pgTable("files",{
    id:uuid("id").defaultRandom().primaryKey(),

    //basic file/folder info

    name:text("name").notNull(),
    path:text("path").notNull(),// /document/project/resume
    size:integer("size").notNull(),
    type:text("type").notNull(), //folder

    //store information
    fileUrl:text("file_url").notNull(), //url to access file
    thumnailUrl:text("thumbnail_url"),

    //Ownership
    userId:text("user_id").notNull(),
    parentId:uuid("parent_id"), //parent folder id (null for root items)

    //file/folder flags
    isFolder:boolean("is_folder").default(false).notNull(),
    isStarred:boolean("is_starred").default(false).notNull(),
    isTrash :boolean("is_trash").default(false).notNull(),

    //Timestamps
     createdAt:timestamp("created_at").defaultNow().notNull(),
     updateAt:timestamp("update_at").defaultNow().notNull()


})

/*parent :Each file/folder can have on parent folder

    childern:Each folder can have many child files/folder
*/ 




export const FilesRelations = relations(files, ({one,many})=>({
    parent: one(files,{
        fields:[files.parentId],
        references:[files.id]
    }),


    //relationship to child file/folder
    childern: many(files)
}))

//Type definations

export const File = typeof files.$inferSelect;
export const NewFile = typeof files.$inferInsert;