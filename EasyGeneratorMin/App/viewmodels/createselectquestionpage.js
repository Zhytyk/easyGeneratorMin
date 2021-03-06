﻿define(['extenders/validationExtenders', 'data/selectQuestionRepository','plugins/router'], function (validationExtenders, selectQuestionRepository, router) {
    return {
        courseId: '',
        sectionId: '',
        singleSelectQuestionTitle: ko.observable().extend({ required: '' }),
        multipleSelectQuestionTitle: ko.observable().extend({ required: '' }),
        activate: function (courseId, sectionId) {
            this.courseId = courseId;
            this.sectionId = sectionId;
            this.singleSelectQuestionTitle("SomeSingleSelectQuestion");
            this.multipleSelectQuestionTitle("SomeMultipleSelectQuestion");
            return selectQuestionRepository.tryInitializeSelectQuestions();
        },
        createSingleSelectQuestion: function () {
            var self = this;
            selectQuestionRepository.createSingleSelectQuestion(this.singleSelectQuestionTitle(), this.sectionId).then(function () {
                router.navigateBack();
            });
        },
        createMultipleSelectQuestion: function () {
            var self = this;
            selectQuestionRepository.createMultipleSelectQuestion(this.multipleSelectQuestionTitle(), this.sectionId).then(function () {
                router.navigateBack();
            });
        },
        back: function () { router.navigateBack();}
    };
});