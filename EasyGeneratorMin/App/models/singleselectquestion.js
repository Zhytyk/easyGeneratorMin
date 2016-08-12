define(['models/selectQuestion'], function (SelectQuestion) {
    function SingleSelectQuestion(spec) {
        SelectQuestion.call(this, spec);
    };

    SingleSelectQuestion.prototype.calculateUsersCorrectAnswer = function (usersAnswers) {
        var usersCorrectAnswer = 0;

        _.each(this.answers, function (answer) {

            usersAnswer = _.find(usersAnswers, function (usersAnswer) {
                return usersAnswer.id == answer.id;
            });

            usersCorrectAnswer += (usersAnswer.isCorrectly == "true" && Boolean(usersAnswer.isCorrectly) == answer.isCorrectly) ? 1 : 0;
        });

        return usersCorrectAnswer;
    };


    return SingleSelectQuestion;
});