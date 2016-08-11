define(['data/selectQuestionRepository'], function (selectQuestionRepository) {
    function filterSelectQuestionBySectionId(sectionId) {
        return selectQuestionRepository.getSelectQuestions()
            .then(function (selectQuestions) {
                return _.filter(selectQuestions, function (selectQuestion) {
                    return sectionId == selectQuestion.sectionId;
                });
        });
    };

    return {
        filterSelectQuestionBySectionId: filterSelectQuestionBySectionId
    };
});