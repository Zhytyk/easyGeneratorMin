define(['service/previewService', 'data/selectQuestionRepository', 'plugins/router', 'mapping/viewMapper', 'service/dataService', 'service/previewService'],
    function (previewRepository, selectQuestionRepository, router, viewMapper, dataService, previewService) {

    return {
        selectQuestions: ko.observableArray(),
        courseId: '',
        sectionId: '',
        activate: function (courseId, sectionId) {
            var self = this;
            this.sectionId = sectionId;
            this.courseId = courseId;
            return selectQuestionRepository.tryInitializeSelectQuestions()
                .then(function () {
                    dataService.filterSelectQuestionBySectionId(sectionId)
                        .then(function (selectQuestions) {
                            self.selectQuestions(viewMapper.previewSelectQuestionMapper(selectQuestions));
                        });
                });
        },
        answersHandler: function () {

            previewService.getPreviewSectionResult(this.selectQuestions(), this.sectionId, this.courseId)
                .then(function (result) {
                    alert("You have " + result.usersPoint + " from " + result.maxPoint + " points.");
                    router.navigateBack();
                });
        },
        back: function () { router.navigateBack(); }
    };
});