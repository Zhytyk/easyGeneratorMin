define(['extenders/validationExtenders', 'data/answerRepository', 'plugins/router'], function (validationExtenders, answerRepository, router) {
    function initializeForm(questionId, answerId, self) {
        return answerRepository.getAnswerById(questionId, answerId).then(function (answer) {
            self.answerTitle(answer.title);
            self.answerIsCorrectly(answer.isCorrectly);
        });
    };

    return {
        questionId: '',
        answerId: '',
        answerTitle: ko.observableArray().extend({ required: '' }),
        answerIsCorrectly: ko.observable(),
        activate: function(questionId, answerId){
            this.questionId = questionId;
            this.answerId = answerId;
            return initializeForm(questionId, answerId, this);
        },
        updateAnswer: function (selectQuestionId, answerId) {
            answerRepository.updateAnswer(this.questionId, this.answerId, this.answerTitle(), this.answerIsCorrectly())
                .then(function () {
                    router.navigateBack();
                })
        },
    };
});