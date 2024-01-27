// Creating PostgreSQL Client here
import * as pg from "pg";
const { Pool } = pg.default;

const connectionPool = new Pool({
  connectionString: "postgresql://postgres:1234@localhost:5432/posts",
});

export { connectionPool };
