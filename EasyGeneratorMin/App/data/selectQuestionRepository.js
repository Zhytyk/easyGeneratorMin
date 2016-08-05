define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandler) {
    
    function tryInitializeSelectQuestions() {
        return new Promise(function (resolve, reject) {
            if (!dataContext.selectQuestions) {
                dataContext.selectQuestions = [];

                dataContext.initializeSelectQuestions().then(function () {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    };

    function getSelectQuestionById(id) {
        return new Promise(function (resolve, reject) {
            tryInitializeSelectQuestions()
                .then(function () {
                    var selectQuestion = dataContext.selectQuestions.find(function (selectQuestion) {
                        return selectQuestion.id == id;
                    });

                    if (!selectQuestion) {
                        throw httpErrorHandler.dataIsNotFoundHandler();
                    }

                    resolve(selectQuestion);
                });
        });
    };

    function createSingleSelectQuestion(singleSelectQuestionTitle, sectionId) {
        return http.post('create/singleselectquestion', { id: sectionId, title: singleSelectQuestionTitle })
            .then(function (singleSelectQuestion) {
                if (!singleSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                dataContext.selectQuestions.push(modelMapper.mapSelectQuestion(singleSelectQuestion));
            });
    };

    function createMultipleSelectQuestion(multipleSelectQuestionTitle, sectionId) {
        return http.post('create/multipleselectquestion', { id: sectionId, title: multipleSelectQuestionTitle })
            .then(function (multipleSelectQuestion) {
                if (!multipleSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                dataContext.selectQuestions.push(modelMapper.mapSelectQuestion(multipleSelectQuestion));
            });
    };

    function removeSelectQuestion(id) {
        return http.remove('remove/selectquestion', { id: id })
            .then(function () {
                var index = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                    return selectQuestion.id == id;
                });

                dataContext.selectQuestions.splice(index, 1);

                return index;
            });
    };

    function updateSelectQuestion(id, title) {
        return http.put('update/selectquestion', { id: id, title: title })
            .then(function (updatedSelectQuestion) {
                if (!updatedSelectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                }

                var selectQuestion = dataContext.selectQuestions.find(function (selectQuestion) {
                    return selectQuestion.id == id;
                });

                selectQuestion.title = updatedSelectQuestion.Title;
                selectQuestion.lastUpdatedDate = new Date(updatedSelectQuestion.LastUpdatedDate).toLocaleString();
            });
    };

    return {
        tryInitializeSelectQuestions: tryInitializeSelectQuestions,
        getSelectQuestionById: getSelectQuestionById,
        createSingleSelectQuestion : createSingleSelectQuestion,
        createMultipleSelectQuestion: createMultipleSelectQuestion,
        updateSelectQuestion: updateSelectQuestion,
        removeSelectQuestion: removeSelectQuestion
    };
});