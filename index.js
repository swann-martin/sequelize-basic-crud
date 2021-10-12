// import express
import express from 'express';
// import cors
import cors from 'cors';
//import connection to database
import db from './config/database.js';
// import router
import Router from './routes/routes.js';

// initialize express
const app = express();
// use express json
app.use(express.json());
//use cors
app.use(cors());

// testing database connection from sequelize method authenticate

try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// use router

app.use(Router);

// listen on port
app.listen(3001, () => console.log('Server Running at http://localhost:3001'));
