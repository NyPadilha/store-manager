const express = require('express');
const { 
  productsRouter,
  salesRouter,
} = require('./routes');

const app = express();

// NO CYPRESS TA PASSANDO TUDO PQ KRLS N PASSA NO AVALIADOR

app.use(express.json());
app.use('/products', productsRouter);
app.use('/sales', salesRouter);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.json({ status: 'Store Manager UP!' });
});

module.exports = app;
