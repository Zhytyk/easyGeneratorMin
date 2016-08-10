define(['data/selectQuestionRepository'], function (selectQuestionRepository) {
    function filterSelectQuestionBySectionId(sectionId) {
        return selectQuestionRepository.getSelectQuestions()
            .then(function (selectQuestions) {
                return selectQuestions.filter(function (selectQuestion) {
                    return sectionId == selectQuestion.sectionId;
                });
        });
    };

    return {
        filterSelectQuestionBySectionId: filterSelectQuestionBySectionId
    };
});