const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-dfpzp.mongodb.net/semana10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const app = express();

app.use(cors({ origin: "https://omnistack10api.herokuapp.com/"}));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);
