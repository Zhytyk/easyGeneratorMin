define(['data/answerRepository', 'data/selectQuestionRepository', 'plugins/router', 'mapping/viewMapper'],
    function (answerRepository, selectQuestionRepository, router, viewMapper) {

    function filterSelectQuestionBySectionId(sectionId) {
        var filteredSelectQuestions = viewMapper.previewSelectQuestionMapper().filter(function (selectQuestion) {
            return sectionId == selectQuestion.sectionId;
        });

        return filteredSelectQuestions;
    };

    return {
        selectQuestions: ko.observableArray(),
        activate: function (courseId, sectionId) {
            var self = this;
            return selectQuestionRepository.tryInitializeSelectQuestions().then(function () {
                self.selectQuestions(filterSelectQuestionBySectionId(sectionId));
            });
        },
        answersHandler: function () {
            console.log(this.selectQuestions());
        }
    };
});