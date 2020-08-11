const process = require('process');
const { Pool, Client } = require('pg');

const createCategorySchema = `CREATE TABLE IF NOT EXISTS category(
  ID serial not null primary key,
  NAME TEXT NOT NULL,
  DESCRIPTION TEXT NOT NULL,
  IMGSRC TEXT NOT NULL,
  LINKTO TEXT NOT NULL
);`;

const initialData = [
  `INSERT INTO category (NAME, DESCRIPTION, IMGSRC, LINKTO)
  VALUES ('Popular', 'Gift ideas popular among all users', 'categories_popular.png', '/categories/popular');`,
  `INSERT INTO category (NAME, DESCRIPTION, IMGSRC, LINKTO)
  VALUES ('Sci-Fi Guy', 'Gifts for the all around science fiction fan', 'categories_scifi.png', '/categories/scifi');`,
  `INSERT INTO category (NAME, DESCRIPTION, IMGSRC, LINKTO)
  VALUES ('Bookworm', 'Gifts for the one whose nose is always stuck in a book', 'categories_bookworm.png', '/categories/book');`,
  `INSERT INTO category (NAME, DESCRIPTION, IMGSRC, LINKTO)
  VALUES ('Gadget Guru', 'For the Tech savant in your friend group', 'categories_gadget.png', '/categories/tech');`
];

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

(async () => {

  console.log('begin checks...')
  //Is Database Up?
  let { rows } = await pool.query('SELECT NOW()');
  if(rows && rows.length){ console.log(`A successful database connection has been established...`); }

  //Create table if it doesn't exist
  let res = await pool.query(createCategorySchema);
  console.log("Created table:category if it didn't already exist...")

  //Populate table
  for(item of initialData){
    await pool.query(item);
  }

  //Fetch to confirm data entry successful
  res = await pool.query('SELECT * FROM category');
  console.log(res.rows)
  if(res.rows.length>0){console.log('Success...')}


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
