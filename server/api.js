const express = require('express');

const controller = require('./controller');

const router = express.Router();

//gets all rows from public.users table 
router.get(
  '/users', 
  controller.getUsers,
  (req, res) => res.status(200).json(res.locals.userInfo)
);

//post first_name, last_name, email, encrypted password into a row in the public.users table 
router.post(
  '/signup',
  controller.hash,
  controller.newUser,
  (req, res) => res.status(200).json(res.locals.newUser)
)

router.post(
  '/login',
  controller.login,
  (req, res) => res.status(200).json(res.locals.user)
)

//gets specific product by category
router.get(
  '/products/:category',
  controller.getProductsByCategory,
  (req, res) => res.status(200).json(res.locals.getProductsByCategory)
);

//gets all products from public.products table
router.get(
  '/products',
  controller.getProducts,
  (req, res) => res.status(200).json(res.locals.productsInfo)
);


module.exports = router;


