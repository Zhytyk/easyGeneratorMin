define(function () {
    function previewSelectQuestionsMapper(selectQuestions) {
        return mapSelectQuestions = selectQuestions.map(function (selectQuestion) {

            return newSelectQuestion = {

                id: selectQuestion.id,
                answers: selectQuestion.answers().map(function (answer) {

                    return newAnswer = {
                        id: answer.id,
                        isCorrectly: answer.isCorrectly == "true" ? true : answer.isCorrectly == "false" ? false : answer.isCorrectly,
                    };
                })
            };
        });
    };

    return {
        previewSelectQuestionsMapper: previewSelectQuestionsMapper
    };
});