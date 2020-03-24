const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento:'Semana ominiStack 11.0',
        aluno: 'Rafael Arthur'
    });
});

app.listen(3333);