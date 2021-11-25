let mongoose = require('mongoose');

//create a model class
let surveyModel = mongoose.Schema(
    {
        //set the properties
        name: String,
        gender: String,
        email: String,
        question1: String,
        question2: String,
        question3: String
    },        
    {
        collection: "survey"
    }
);

module.exports = mongoose.model('Survey', surveyModel);
