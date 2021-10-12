import express from 'express';

import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/Product.js';

// initialise express router
const router = express.Router();

// route for all methods
// route to get all products
router.get('/products', getProducts);
// route to get product by Id
router.get('/products/:id', getProductById);
// route to create a new product
router.post('/products', createProduct);
// route to update product by its id
router.put('/products/:id', updateProduct);
// route to delete product by its id
router.delete('/products/:id', deleteProduct);

export default router;
