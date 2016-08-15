define(['preview/data/previewRepository', 'data/selectQuestionRepository', 'services/dataService'], function (previewRepository, selectQuestionsRepository, dataService) {
    function changePassingCourseResult(newSectionProgressPoint, section) {
        if (newSectionProgressPoint > section.progressPreview) {
            previewRepository.changePassingCoursePoint(newSectionProgressPoint, section.progressPreview);
            section.progressPreview = newSectionProgressPoint;
        }
    };

    function getUsersPoint(usersSelectQuestions, correctSelectQuestions) {
        var correctUserAnswers = 0;

        _.each(correctSelectQuestions, function (correctSelectQuestion) {

            usersSelectQuestion = _.find(usersSelectQuestions, function (usersSelectQuestion) {
                return usersSelectQuestion.id === correctSelectQuestion.id;
            });

            var correctUserAnswersInQuestion = correctSelectQuestion.calculateUsersCorrectAnswer(usersSelectQuestion.answers());

            correctUserAnswers += correctUserAnswersInQuestion;
        });

        return correctUserAnswers;
    };

    function getPreviewSectionResult(usersSelectQuestions, sectionId, courseId) {
        return dataService.filterSelectQuestionBySectionId(sectionId)
            .then(function (correctSelectQuestions) {

                var usersPoint = getUsersPoint(usersSelectQuestions, correctSelectQuestions);
                
                var maxPoint = correctSelectQuestions.length;

                return previewRepository.getPreviewSectionById(courseId, sectionId)
                        .then(function (section) {

                            changePassingCourseResult(usersPoint / maxPoint, section);

                            return {
                                usersPoint: usersPoint,
                                maxPoint: maxPoint
                            };
                        });
            });
    };

    return {
        getPreviewSectionResult: getPreviewSectionResult
    };
});