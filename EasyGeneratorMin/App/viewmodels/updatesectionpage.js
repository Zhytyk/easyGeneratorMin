define(['data/answerRepository', 'data/selectQuestionRepository', 'data/sectionRepository', 'plugins/router', 'extenders/validationExtenders', 'service/dataService', 'mapping/viewMapper'],
    function (answerRepository, selectQuestionRepository, sectionRepository, router, validationExtenders, dataService, viewMapper) {

    function initializeForm(courseId, sectionId, self) {
         return sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };

    return {
        selectQuestions: ko.observableArray([]),
        sectionTitle: ko.observable().extend({ required: '' }),
        courseId: '',
        sectionId: '',
        activate: function (courseId, sectionId) {
            var self = this;
            return selectQuestionRepository.tryInitializeSelectQuestions()
                .then(function () {
                    self.courseId = courseId;
                    self.sectionId = sectionId;
                    initializeForm(self.courseId, self.sectionId, self);
                    dataService.filterSelectQuestionBySectionId(sectionId)
                        .then(function (selectQuestions) {
                            self.selectQuestions(viewMapper.selectQuestionsMapper(selectQuestions));
                        });
                });
        },
        updateSection: function () {
            sectionRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle()).then(function() {
                router.navigateBack();
            });
        },
        createSelectQuestion: function () {
            router.navigate("#course/" + this.courseId + "/section/" + this.sectionId + "/create/selectquestion");
        },
        removeSelectQuestion: function (question) {
            var self = this;
            selectQuestionRepository.removeSelectQuestion(question.id)
                .then(function () {
                    var selectQuestion = self.selectQuestions().find(function (selectQuestion) {
                        return selectQuestion.id == question.id;
                    });

                    self.selectQuestions.remove(selectQuestion);
                });
        },
        removeAnswer: function(answer){
            var self = this;
            answerRepository.removeAnswer(answer.selectQuestionId, answer.id)
                .then(function () {
                    var question = self.selectQuestions().find(function (selectQuestion) {
                        return selectQuestion.id == answer.selectQuestionId;
                    });

                    var indexAnswer = question.answers().findIndex(function (currentAnswer) {
                        return currentAnswer.id == answer.id;
                    });

                    question.answers.valueHasMutated();
                });
        },
        updateSelectQuestion: function (selectQuestion) {
            router.navigate("update/selectquestion/" + selectQuestion.id);
        },
        updateAnswer: function(answer){
            router.navigate("update/question/" + answer.selectQuestionId + "/answer/" + answer.id);
        },
        back: function () { router.navigateBack(); }
    };
})