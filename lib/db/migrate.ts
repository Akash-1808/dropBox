import { migrate } from "drizzle-orm/neon-http/migrator";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";


import * as dotenv from "dotenv"

dotenv.config({path:".env.local"})

if(!process.env.DATABASE_URL){
    throw new Error("Database url is not set in .env.local")
}

const path = require("path")
async function runMigration() {
    
    console.log("Starting database migration...")
    try {
        const sql = neon(process.env.DATABASE_URL!)
        const db = drizzle(sql)

        await migrate(db,{migrationsFolder:"./drizzle"});
        console.log("ALL migrations are successfully done")
    } catch (error) {
        
        console.log("ALL migrations are not successfully done",error)
        process.exit(1)
    }
}

runMigration()