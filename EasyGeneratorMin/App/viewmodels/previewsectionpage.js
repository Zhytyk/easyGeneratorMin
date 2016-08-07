define(['data/previewRepository', 'data/selectQuestionRepository', 'plugins/router', 'mapping/viewMapper', 'mapping/previewMapper'],
    function (previewRepository, selectQuestionRepository, router, viewMapper, previewMapper) {

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

            previewRepository.getPreviewResult(previewMapper.previewSelectQuestionsMapper(this.selectQuestions())).then(function (result) {
                alert(result);
                router.navigateBack();
            });
        }
    };
});