define(['data/selectQuestionRepository','data/sectionRepository', 'plugins/router', 'extenders/validationExtenders', 'mapping/viewMapper'], function (selectQuestionRepository, sectionRepository, router, validationExtenders, viewMapper) {
    function initializeFormPage(courseId, sectionId, self) {
        sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };

    function filterSelectQuestionBySectionId(mapSelectQuestions, sectionId) {
        var filteredSingleSelectQuestions = mapSelectQuestions.mapSingleSelectQuestions.filter(function (singleSelectQuestion) {
            return sectionId == singleSelectQuestion.sectionId;
        });

        var filteredMultipleSelectQuestions = mapSelectQuestions.mapMultipleSelectQuestions.filter(function (multipleSelectQuestion) {
            return sectionId == multipleSelectQuestion.sectionId;
        });

        return {
            filteredSingleSelectQuestions: filteredSingleSelectQuestions,
            filteredMultipleSelectQuestions: filteredMultipleSelectQuestions
        };
    };

    return {
        singleSelectQuestions: ko.observableArray([]),
        multipleSelectQuestions: ko.observableArray([]),
        sectionTitle: ko.observable().extend({ required: '' }),
        courseId: '',
        sectionId: '',
        activate: function (courseId, sectionId) {
            var self = this;
            selectQuestionRepository.getSelectQuestions()
                .then(function () {
                    self.courseId = courseId;
                    self.sectionId = sectionId;
                    initializeFormPage(self.courseId, self.sectionId, self);
                    self.singleSelectQuestions(filterSelectQuestionBySectionId(viewMapper.selectQuestionsMapper(), sectionId).filteredSingleSelectQuestions);
                    self.multipleSelectQuestions(filterSelectQuestionBySectionId(viewMapper.selectQuestionsMapper(), sectionId).filteredMultipleSelectQuestions);
                });
        },
        updateSection: function () {
            sectionRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle()).then(function() {
                router.navigateBack();
            });
        },
        createSelectQuestion: function () {
            router.navigate("#" + this.courseId + "/" + this.sectionId + "/create/selectquestion");
        },
        removeSingleSelectQuestion: function (id) {
            var self = this;
            selectQuestionRepository.removeSingleSelectQuestion(id).then(function (index) {
                self.singleSelectQuestions.splice(index, 1);
            });
        },
        removeMultipleSelectQuestion: function (id) {
            var self = this;
            selectQuestionRepository.removeMultipleSelectQuestion(id).then(function (index) {
                self.multipleSelectQuestions.splice(index, 1);
            });
        },
        updateSingleSelectQuestion: function (id) {
            router.navigate("update/singleselectquestion/" + id);
        },
        updateMultipleSelectQuestion: function (id) {
            router.navigate("update/multipleselectquestion/" + id);
        },
    };
})