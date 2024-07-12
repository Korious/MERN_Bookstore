import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';

const app = express();

// Parsing request body
app.use(express.json());
//Allows all origins with a defautlt of cors(*)
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('This is the Http Route! Welcome');
});

app.use('./books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App is connected to the database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });