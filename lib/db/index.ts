import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "./schema";

let _sql: ReturnType<typeof neon> | null = null;
let _db: ReturnType<typeof drizzle> | null = null;

function getSql() {
	if (_sql) return _sql;
	const url = process.env.DATABASE_URL;
	if (!url) {
		throw new Error(
			"Database connection string is not set. Set DATABASE_URL in your environment before using the database."
		);
	}
	_sql = neon(url);
	return _sql;
}

export function getDb() {
	if (_db) return _db;
	const sql = getSql();
	_db = drizzle(sql, { schema });
	return _db;
}

export { getSql as sql };