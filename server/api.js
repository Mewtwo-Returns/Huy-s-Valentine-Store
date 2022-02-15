const express = require('express');

const controller = require('./controller');

const router = express.Router();

//gets all rows from public.user table 
router.get(
  '/users', 
  controller.getUsers,
  (req, res) => res.status(200).json(res.locals.userInfo)
);


//gets all products from public.products table
router.get(
  'products',
  (req, res) => res.status(200).json(res.locals.productsInfo)
);


