
/* load the framework and all routes defining  */
let express = require('express');
let router = express.Router();

// indicate index.js in the controller folder 
let indexController = require('../controllers/index');


/* route to call and load 'Home' page. */
// indicate the actual page on index.js in the controller folder
router.get('/', indexController.displayHomePage);

/* route to call and load 'Home' page. */
// indicate the actual page on index.js in the controller folder
router.get('/home', indexController.displayHomePage);

/* GET Route for displaying the Login page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
