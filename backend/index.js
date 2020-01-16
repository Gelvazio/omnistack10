const express = require('express');

const app = express();

app.get('/', (request, response) => {
	return response.json({status : "sistema iniciado!"});
});

app.listen(process.env.PORT || 3333);