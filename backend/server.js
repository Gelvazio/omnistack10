import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './routes';

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-dfpzp.mongodb.net/semana09?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);
