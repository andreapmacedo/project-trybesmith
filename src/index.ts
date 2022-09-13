import app from './app';
import * as productsController from './controllers/products';

const PORT = 3000;

app.get('/', (req, res) => res.json({ ok: true }));

app.post('/products', productsController.create);

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`,
));

export default server;
