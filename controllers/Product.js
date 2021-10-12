import Product from '../models/Product.js';

// get all products
export const getProducts = async (req, res) => {
  try {
    const product = await Product.findAll();
    res.send(product);
  } catch (err) {
    console.log(err);
  }
};

// get an individual product by its id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(product[0]);
  } catch (err) {
    console.log(err);
  }
};

// create a product
export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.json({
      message: 'Product Created',
    });
  } catch (err) {
    console.log(err);
  }
};

//Update a product by its id
export const updateProduct = async (req, res) => {
  try {
    await Product.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Updated',
    });
  } catch (err) {
    console.log(err);
  }
};

// Delete a product by its id
export const deleteProduct = async (req, res) => {
  try {
    await Product.destroy(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: 'Product Deleted',
    });
  } catch (err) {
    console.log(err);
  }
};
