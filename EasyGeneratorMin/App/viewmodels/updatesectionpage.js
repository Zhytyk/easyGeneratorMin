define(['data/answerRepository', 'data/selectQuestionRepository','data/sectionRepository', 'plugins/router', 'extenders/validationExtenders', 'mapping/viewMapper'], function (answerRepository, selectQuestionRepository, sectionRepository, router, validationExtenders, viewMapper) {
    function initializeForm(courseId, sectionId, self) {
         return sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };

    function filterSelectQuestionBySectionId(sectionId) {
        var filteredSelectQuestions = viewMapper.selectQuestionsMapper().filter(function (selectQuestion) {
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
            return selectQuestionRepository.tryInitializeSelectQuestions()
                .then(function () {
                    self.courseId = courseId;
                    self.sectionId = sectionId;
                    initializeForm(self.courseId, self.sectionId, self);
                    self.selectQuestions(filterSelectQuestionBySectionId(sectionId));
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
            selectQuestionRepository.removeSelectQuestion(id)
                .then(function () {
                    var index = self.selectQuestions().findIndex(function (selectQuestion) {
                        return selectQuestion.id == id;
                    });
                
                    self.selectQuestions.splice(index, 1);
            });
        },
        removeAnswer: function(answerId, questionId){
            var self = this;
            answerRepository.removeAnswer(questionId, answerId)
                .then(function () {
                    var indexQuestion = self.selectQuestions().findIndex(function (selectQuestion) {
                        return selectQuestion.id == questionId;
                    });

                    var indexAnswer = self.selectQuestions()[indexQuestion].answers().findIndex(function (answer) {
                        return answer.id == answerId;
                    });

                    self.selectQuestions()[indexQuestion].answers.valueHasMutated();
            });
        },
        updateSelectQuestion: function (id) {
            router.navigate("update/selectquestion/" + id);
        },
    };
})