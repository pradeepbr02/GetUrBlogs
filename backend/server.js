

import express from 'express';
import mongoose from 'mongoose';
import admin from 'firebase-admin';
import fs from 'fs';
import router from './routes/routes.js';

mongoose.connect('mongodb://127.0.0.1:27017/ArticleDB');

const credentials = JSON.parse(fs.readFileSync('./credentials.json'));

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

const app = express();

app.use(express.json());

app.use(router);

app.listen(5000, () => {
  console.log('Server is running');
});

