define(['data/selectQuestionRepository', 'data/answerRepository', 'extenders/validationExtenders', 'plugins/router'], function (selectQuestionRepository, answerRepository, validationExtenders, router) {
    function initializeForm(id, self) {
        return selectQuestionRepository.getSelectQuestionById(id).then(function (selectQuestion) {
            self.selectQuestionTitle(selectQuestion.title);
        });
    };

    return {
        selectQuestionTitle: ko.observable().extend({ required: '' }),
        answerTitle: ko.observable().extend({ required: '' }),
        selectQuestionId: '',
        activate: function (id) {
            this.selectQuestionId = id;
            this.answerTitle("SomeAnswer");
            return initializeForm(id, this);
        },
        updateSelectQuestion: function () {
            selectQuestionRepository.updateSelectQuestion(this.selectQuestionId, this.selectQuestionTitle()).then(function () {
                router.navigateBack();
            });
        },
        createAnswer: function(){
            answerRepository.createAnswer(this.selectQuestionId, this.answerTitle()).then(function () {
                router.navigateBack();
            });
        },
    };
});