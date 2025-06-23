import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoute from './routes/userRoute.js'; 
import taskRoute from './routes/taskRoute.js';  

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', userRoute);

app.use('/api', taskRoute);

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.log(err));
