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
    const {first_name, last_name, email, user_password} = req.body;
    bcrypt.hash(user_password, 10, (err, hashPw) => {
      if(err){
        return next({
          log: `controller.hasj ERROR found`,
          status: 500,
          message: {
            err: 'Error occurred in controller.hash. Check the server logs!'
          },
        });
      }
      const userSignup = {first_name, last_name, email, hashPw};
      res.locals.signupInfo = userSignup;
      return next();
    });
};


//create a new row in public.user, storing first_name, last_name, email, and encrypted password
controller.newUser = async(req, res, next) => {
  try{
    const { first_name, last_name, email, hashPw } = res.locals.signupInfo
    const params = [
      first_name,
      last_name,
      email,
      hashPw,
    ];

    const text = `INSERT INTO public.users (first_name, last_name, email, user_password) VALUES ($1, $2, $3, $4) RETURNING *`;

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

//login 
controller.login = async(req, res, next) => {
  const {email, password} = req.body;
  const queryStr = `SELECT * from public.users WHERE email=$1`
  const result = await db.query(queryStr, [email]);

  const data = result.rows;
  const hash = data[0].user_password;

  bcrypt.compare(password, hash, (err, ok) => {
    if(ok){
      console.log('bcrypt comparison check OK')
      res.locals.user = data[0]
      return next();
    } else {
      res.send(err);
    }
  });
}

//get all products in public.products
controller.getProducts = async (req, res, next) => {
  try {
    // SQL command string
    const queryStr = `SELECT * from public.products`;

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

controller.getProductsByCategory = async(req, res, next) => {
  //security
  const allowedParams = ['card', 'clothing', 'sweets', 'miscellaneous'];
  if(!allowedParams.includes(req.params.category)){
    res.status(403).json({error: 'requested category does NOT exist!'})
  }
  try{
    const queryStr = `SELECT * from public.products WHERE category=$1`;

    const params = [
      req.params.category
    ]
    const result = await db.query(queryStr, params);
    console.log(result)
    const data = result.rows;

    res.locals.getProductsByCategory = data;
    return next();
  } catch(error){
    return next({
      log: `getProductsByCategory controller ERROR`,
      message: {
        err: 'Error occurred in controller.getProductsByCategory. Check the server logs.',
      },
    });
  }
}


module.exports = controller;
