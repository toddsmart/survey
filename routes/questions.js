var express = require('express'),
    router = express.Router(),
    surveyModels = require('../model/survey'),
    Question = surveyModels.Question;

router.route('/')
    /* GET all questions */
    .get(function(req, res, next) {
        Question.findAll().then(function (questions) {
            res.send(JSON.stringify(questions));
        });
    })
    /* POST question */
    .post(function(req, res) {
        var question;

        question = Question.build({
            question: req.body.question
        });

        question.save().then(function (question) {
            res.send('new question created with id: ' + question.id);
        });
    });

/* GET question */
router.route('/:id')
    .get(function(req, res, next) {
        Question.find({
            where: {
                id: req.params.id
            }
        }).then(function (question) {
            res.send(JSON.stringify(question));
        });
    });

module.exports = router;
