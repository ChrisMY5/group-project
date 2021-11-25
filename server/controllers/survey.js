
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to model
let Survey = require ('../models/survey');

// activate displaying the survey list
module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('survey/list', 
            {title: 'Survey List', 
            SurveyList: surveyList, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// activate to diaply the page of Adding a new survey
module.exports.displayAddPage = (req, res, next) => {
    res.render('survey/add', 
    {title: 'Add Survey', 
    displayName: req.user ? req.user.displayName : ''});
}

// activate actual process of adding new survey
module.exports.processAddPage = (req, res, next) => {
    let newSurvey = Survey({
        "name": req.body.name,
        "gender": req.body.gender,
        "email": req.body.email,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
    });

    Survey.create(newSurvey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end.bind(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey');
        }
    });
}

// activate to display of Edit page
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, SurveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('survey/edit', 
            {title: 'Edit Survey', 
            survey: SurveyToEdit, 
            displayName: req.user ? req.user.displayName : ''});
        }
    });
}

// activate actual process of Editting the specific survey data
module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedSurvey = Survey({
        "_id": id,
        "name": req.body.name,
        "gender": req.body.gender,
        "email": req.body.email,
        "question1": req.body.question1,
        "question2": req.body.question2,
        "question3": req.body.question3,
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey');
        }
    });
}

// remove a selected survey list 
module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the survey list
            res.redirect('/survey');
        }
    });
}