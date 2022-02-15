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
    const {name, password} = req.body;
    const hashedPw = await bcrypt.hash(password, 10, (err, hash) => {
      const userSignup = {name: name, hashPw: hash};
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


