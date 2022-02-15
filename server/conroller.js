const db = require('./database');
const bcrypt = require('bcrypt');

const controller = {};

//get all users
controller.getUsers = async(req, res, next) => {
  try{
    const queryStr = `SELECT * from public.users`;
    const result = await db.query(queryStr);
    const data = result.rows;
    res.locals.userInfo = data;
    return next();
  } catch(error){
    return next({
      log: `getUsers controller ERROR`,
      message: {
        err: 'Error occurred in controller.getUsers. Check the server logs!'
      },
    });
  }
};

//hash a user input password
controller.hash = async(req, res, next) => {
  try{
    const {first_name, last_name, email, user_password} = req.body;
    const hashedPw = await bcrypt.hash(password, 10, (err, hash) => {
      const userSignup = {first_name: first_name, last_name: last_name, email: email, hashPw: hash};
      res.locals.signupInfo = userSignup;
      return next();
    });
  } catch (error) {
    return next({
      log: `controller.hasj ERROR found`,
      status: 500,
      message: {
        err: 'Error occurred in controller.hash. Check the server logs!'
      },
    });
  }
};


//create a new row in public.user, storing first_name, last_name, email, and encrypted password
controller.newUser = async(req, res, next) => {
  try{
    const { first_name, last_name, email, hashedPw } = res.locals.signupInfo
    const params = [
      first_name,
      last_name,
      email,
      hashedPw,
    ];

    const text = `INSERT INTO public.users (first_name, last_name, email, hashedPw) VALUES ($1, $2, $3, $4) RETURNING *`;

    const result = await db.query(text, params);

    res.locals.newUser = result.rows[0];
    return next();
  } catch (error) {
    return next({
      log:`controller.newUser ERROR found`,
      status: 500,
      message: {
        err: 'Error occured in controller.newUser. Check the server logs!',
      },
    });
  }
};

//get all products in public.products
controller.getProducts = async (req, res, next) => {
  try {
    // SQL command string
    const queryString = `SELECT * from public.products`;

    // db query function to get info from our database
    const result = await db.query(queryStr);

    // db.query will return a giant nested object. We just need the data in the rows key
    const data = result.rows;

    // store data in res.locals.all to pass to api router
    res.locals.productsInfo = data;
    return next();
  } catch (error) {
    return next({
      log: `getProducts controller ERROR`,
      message: {
        err: 'Error occurred in controller.getProducts. Check the server logs.',
      },
    });
  }
};



