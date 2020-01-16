const Router = require('express');
const express = require('express');
const DevController = require('./controllers/DevController');
const SearchController = require('./controllers/SearchController');
const PrincipalController = require('./controllers/PrincipalController');

const routes = Router();

routes.get('/', PrincipalController.index);
routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;
