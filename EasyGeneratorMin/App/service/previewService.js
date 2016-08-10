define(['data/previewRepository', 'data/selectQuestionRepository', 'service/dataService'], function (previewRepository, selectQuestionsRepository, dataService) {
    function increasePassingCourseResult() {
        previewRepository.incrementPassingCoursePoint();
    };

    function getPointResult(usersSelectQuestions, correctSelectQuestions) {
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

    function getPreviewSectionResult(usersSelectQuestions, sectionId) {
        return dataService.filterSelectQuestionBySectionId(sectionId)
            .then(function (correctSelectQuestions) {

                var usersPoint = getPointResult(usersSelectQuestions, correctSelectQuestions);

                
                increasePassingCourseResult(usersPoint);

                return {
                    usersPoint: usersPoint,
                    maxPoint: correctSelectQuestions.length
                };
            });
    };

    return {
        getPreviewSectionResult: getPreviewSectionResult
    };
});