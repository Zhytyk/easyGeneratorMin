define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandler) {
    
    function tryInitializeSelectQuestions() {
        return Q.fcall(function () {
            if (!dataContext.selectQuestions) {
                dataContext.selectQuestions = [];

                return dataContext.initializeSelectQuestions();
            }
        });
    };

    function getSelectQuestions() {
        return Q.fcall(function () {
            return tryInitializeSelectQuestions()
                .then(function () {
                     return dataContext.selectQuestions;
                });
        });
    };

    function getSelectQuestionById(id) {
        return Q.fcall(function () {
            return tryInitializeSelectQuestions()
                .then(function () {
                    var selectQuestion = _.find(dataContext.selectQuestions, function (selectQuestion) {
                        return selectQuestion.id == id;
                    });

                    if (!selectQuestion) {
                        throw httpErrorHandler.dataIsNotFoundHandler();
                    }

                    return selectQuestion;
                });
        });
    };

    function createSingleSelectQuestion(singleSelectQuestionTitle, sectionId) {
        return http.post('create/singleselectquestion', { id: sectionId, title: singleSelectQuestionTitle })
            .then(function (singleSelectQuestion) {
                if (!singleSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                dataContext.selectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
            });
    };

    function createMultipleSelectQuestion(multipleSelectQuestionTitle, sectionId) {
        return http.post('create/multipleselectquestion', { id: sectionId, title: multipleSelectQuestionTitle })
            .then(function (multipleSelectQuestion) {
                if (!multipleSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                dataContext.selectQuestions.push(modelMapper.mapMultipleSelectQuestion(multipleSelectQuestion));
            });
    };

    function removeSelectQuestion(id) {
        return http.remove('remove/selectquestion', { id: id })
            .then(function () {
                var index = _.findIndex(dataContext.selectQuestions, function (selectQuestion) {
                    return selectQuestion.id == id;
                });

                dataContext.selectQuestions.splice(index, 1);
            });
    };

    function updateSelectQuestion(id, title) {
        return http.put('update/selectquestion', { id: id, title: title })
            .then(function (updatedSelectQuestion) {
                if (!updatedSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                var selectQuestion = _.find(dataContext.selectQuestions, function (selectQuestion) {
                    return selectQuestion.id == id;
                });

                selectQuestion.title = updatedSelectQuestion.Title;
                selectQuestion.lastUpdatedDate = new Date(updatedSelectQuestion.LastUpdatedDate);
            });
    };

    return {
        tryInitializeSelectQuestions: tryInitializeSelectQuestions,
        getSelectQuestions: getSelectQuestions,
        getSelectQuestionById: getSelectQuestionById,
        createSingleSelectQuestion : createSingleSelectQuestion,
        createMultipleSelectQuestion: createMultipleSelectQuestion,
        updateSelectQuestion: updateSelectQuestion,
        removeSelectQuestion: removeSelectQuestion
    };
});