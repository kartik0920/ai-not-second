import postgres from "postgres";

const connectionString = import.meta.env.DATABASE_URL;
const sql = postgres(connectionString);

export default sql;
