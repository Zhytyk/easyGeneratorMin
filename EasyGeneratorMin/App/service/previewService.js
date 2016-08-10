define(['data/previewRepository', 'data/selectQuestionRepository', 'service/dataService'], function (previewRepository, selectQuestionsRepository, dataService) {
    function increasePassingCourseResult(newSectionProgressPoint, currentSectionProgressPoint) {
        if (newSectionProgressPoint > currentSectionProgressPoint) {
            previewRepository.changePassingCoursePoint(newSectionProgressPoint, currentSectionProgressPoint);
        }
    };

    function getUsersPoint(usersSelectQuestions, correctSelectQuestions) {
        var correctUserAnswers = 0;

        correctSelectQuestions.forEach(function (correctSelectQuestion) {

            usersSelectQuestion = usersSelectQuestions.find(function (usersSelectQuestion) {
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

                return previewRepository.getProgressPreviewSectionPoint(courseId, sectionId)
                        .then(function (previewProgress) {

                            changePassingCourseResult(usersPoint / maxPoint, previewProgress);

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