define(['data/selectQuestionRepository','data/sectionRepository', 'plugins/router', 'extenders/validationExtenders', 'mapping/viewMapper'], function (selectQuestionRepository, sectionRepository, router, validationExtenders, viewMapper) {
    function initializeForm(courseId, sectionId, self) {
         sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };

    function filterSelectQuestionBySectionId(mapSelectQuestions, sectionId) {
        var filteredSelectQuestions = mapSelectQuestions().filter(function (selectQuestion) {
            return sectionId == selectQuestion.sectionId;
        });

        return filteredSelectQuestions;

    };

    return {
        selectQuestions: ko.observableArray([]),
        sectionTitle: ko.observable().extend({ required: '' }),
        courseId: '',
        sectionId: '',
        activate: function (courseId, sectionId) {
            var self = this;
            selectQuestionRepository.getSelectQuestions()
                .then(function () {
                    self.courseId = courseId;
                    self.sectionId = sectionId;
                    initializeForm(self.courseId, self.sectionId, self);
                    self.selectQuestions(filterSelectQuestionBySectionId(viewMapper.selectQuestionsMapper, sectionId));
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
        removeSelectQuestion: function (id) {
            var self = this;
            selectQuestionRepository.removeSelectQuestion(id).then(function (index) {
                self.selectQuestions.splice(index, 1);
            });
        },
        updateSelectQuestion: function (id) {
            router.navigate("update/selectquestion/" + id);
        },
    };
})