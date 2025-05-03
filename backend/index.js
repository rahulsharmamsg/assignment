import express from 'express'
import dotenv from 'dotenv'
import web from './routes/web.js';
import connectDb from './common/config.js';
import cors from 'cors'
dotenv.config()
const port = process.env.PORT;
const app = new express();
app.use(
    cors({
      origin: 'http://localhost:5173', // ✅ Allow frontend
      credentials: true
    })
  );
app.use(express.json());
app.use(web)
app.listen(port, async () => {
    await connectDb()
    console.log(`server start on ${port}`)
})