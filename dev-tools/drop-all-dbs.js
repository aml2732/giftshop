const process = require('process');
const { Pool, Client } = require('pg');


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

(async () => {
  console.log('Dropping table category...')
  await pool.query('DROP TABLE category');
  console.log('Finished Dropping tables...')
})().then(res => {
  console.log('shutting down connections...')
  pool.end();
  process.exit(1);
})
.catch(err =>{
  console.log('An error occurred...')
  console.log(err);
  return setImmediate(() => {
    throw err
  })

  console.log('shutting down connections...')
  pool.end();
  process.exit(1);
})
