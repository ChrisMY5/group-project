
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport'); 

// connect to the Survey Model
let surveyController = require('../controllers/survey')

// helper function for protect modification functions
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// create a route
// GET route for the Survey List page - READ operation
router.get('/', surveyController.displaySurveyList);

// GET route for Displaying Add page - Create operation
router.get('/add', requireAuth, surveyController.displayAddPage);

// Post route for Processing Add page - Create operation
router.post('/add', requireAuth, surveyController.processAddPage);

// GET route for Displaying Edit page - Update operation
router.get('/edit/:id', requireAuth, surveyController.displayEditPage);

// Post route for Processing Edit page - Update operation
router.post('/edit/:id', requireAuth, surveyController.processEditPage);

// GET to perform Contact Deletion - Delte operation
router.get('/delete/:id', requireAuth, surveyController.performDelete);


module.exports = router;