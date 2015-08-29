var Sequelize,
    sequelize,
    Question,
    Answer;

Sequelize = require('sequelize');

sequelize = new Sequelize('mysql://survey:survey@localhost:3306/test', {});

Question = sequelize.define('Question', {
    question: {
        type: Sequelize.STRING,
        field: 'question',
    }
});

Answer = sequelize.define('Answer', {
    answer: {
        type: Sequelize.STRING,
        field: 'answer'
    }
});

Question.hasMany(Answer, {
    as: 'Answers'
});

/* Create/recreate datastructure and test it out */
//sequelize.sync().then(function () {
//    var question,
//        answer;
//
//    question = Question.build({
//        question: 'question1'
//    });
//
//    answer = Answer.build({
//        answer: 'answer1'
//    });
//
//    question.save().then(function (question) {
//        answer.save().then(function (answer) {
//            question.setAnswers([answer]);
//        });
//    });
//});

module.exports = {
    Question: Question,
    Answer: Answer
};