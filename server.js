import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import recordModel from './recordModel';
import tilesModel from './tilesModel';
import recordRoutes from './recordRoute';

const app = express();
const port = 9000;

mongoose.connect('mongodb://localhost/RecordsDB');

app.use(cors());
recordRoutes(app);
app.listen(port);

console.log(`Recipe RESTful API server started on: ${port}`);