const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (req,res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`)
});

app.get('/available_payments', (req, res) => {
res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
