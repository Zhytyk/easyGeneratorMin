define(['data/selectQuestionRepository', 'extenders/validationExtenders', 'plugins/router'], function (selectQuestionRepository, validationExtenders, router) {
    function initializeForm(id, self) {
        return selectQuestionRepository.getSelectQuestionById(id).then(function (selectQuestion) {
            self.selectQuestionTitle(selectQuestion.title);
        });
    };

    return {
        selectQuestionTitle: ko.observable().extend({ required: ''}),
        selectQuestionId: '',
        activate: function (id) {
            this.selectQuestionId = id;
            return initializeForm(id, this);
        },
        updateSelectQuestion: function () {
            selectQuestionRepository.updateSelectQuestion(this.selectQuestionId, this.selectQuestionTitle()).then(function () {
                router.navigateBack();
            });
        },
    };
});