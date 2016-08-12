define(['models/selectQuestion'], function (SelectQuestion) {
    function MultipleSelectQuestion(spec) {
        SelectQuestion.call(this, spec);
    }

    MultipleSelectQuestion.prototype.calculateUsersCorrectAnswer = function (usersAnswers) {
        var usersCorrectAnswers = 0;

        _.each(this.answers, function (answer) {

            usersAnswer = _.find(usersAnswers, function (usersAnswer) {
                return usersAnswer.id == answer.id;
            });

            if (usersAnswer.isCorrectly === answer.isCorrectly) {
                usersCorrectAnswers++;
            }
            
        });

        return usersCorrectAnswers / this.answers.length;
    };


    return MultipleSelectQuestion;
});