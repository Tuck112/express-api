
const express = require('express');
const productRouter = require('./routes/product');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  //console.log('hello');
  res.status(200).json({description: 'Hello World!',success: true});
});


app.use('/products', productRouter);

app.listen(3015);
