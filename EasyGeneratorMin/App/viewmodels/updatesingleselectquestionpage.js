define(['data/selectQuestionRepository', 'extenders/validationExtenders', 'plugins/router'], function (selectQuestionRepository, validationExtenders, router) {
    function initializeForm(id, self) {
        selectQuestionRepository.getSingleSelectQuestionById(id).then(function (singleSelectQuestion) {
            self.singleSelectQuestionTitle(singleSelectQuestion.title);
        });
    };

    return {
        singleSelectQuestionTitle: ko.observable().extend({ required: ''}),
        singleSelectQuestionId: '',
        activate: function (id) {
            this.singleSelectQuestionId = id;
            initializeForm(id, this);
        },
        updateSingleSelectQuestion: function () {
            selectQuestionRepository.updateSingleSelectQuestion(this.singleSelectQuestionId, this.singleSelectQuestionTitle()).then(function () {
                router.navigateBack();
            });
        },
    };
});