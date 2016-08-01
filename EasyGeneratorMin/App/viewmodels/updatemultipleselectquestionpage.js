define(['data/selectQuestionRepository', 'extenders/validationExtenders', 'plugins/router'], function (selectQuestionRepository, validationExtenders, router) {
    function initializeForm(id, self) {
        selectQuestionRepository.getMultipleSelectQuestionById(id).then(function (multipleSelectQuestion) {
            self.multipleSelectQuestionTitle(multipleSelectQuestion.title);
        });
    };

    return {
        multipleSelectQuestionTitle: ko.observable().extend({ required: '' }),
        multipleSelectQuestionId: '',
        activate: function (id) {
            this.multipleSelectQuestionId = id;
            initializeForm(id, this);
        },
        updateMultipleSelectQuestion: function () {
            selectQuestionRepository.updateMultipleSelectQuestion(this.multipleSelectQuestionId, this.multipleSelectQuestionTitle()).then(function () {
                router.navigateBack();
            });
        },
    };
});