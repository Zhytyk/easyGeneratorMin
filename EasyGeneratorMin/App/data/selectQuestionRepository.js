define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'mapping/viewMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, viewMapper, httpErrorHandler) {
    function getSelectQuestions() {
        return new Promise(function (resolve, reject) {
            if (!dataContext.selectQuestions) {
                dataContext.selectQuestions = [];

                http.get('/get/selectquestions').then(function (selectQuestions) {
                    selectQuestions.forEach(function (selectQuestion) {
                        dataContext.selectQuestions.push(viewMapper.selectQuestionsMapper(selectQuestion));
                    });
                });
                resolve("success");
            }
            else {
                resolve("success");
            }
        });
    };

    function getSelectQuestionById(id) {
        return new Promise(function (resolve, reject) {

            getSelectQuestions().then(function () {

                var selectQuestion = dataContext.selectQuestions.find(function (selectQuestion) {
                    return selectQuestion.id == id;
                });

                if (!selectQuestion) {
                    throw httpErrorHandler.dataIsNotFoundHandler();
                    return;
                }


                resolve(selectQuestion);
            });
        });
    }

    function createSingleSelectQuestion(singleSelectQuestionTitle, sectionId) {
        return http.post('create/singleselectquestion', { id: sectionId, title: singleSelectQuestionTitle }).then(function (singleSelectQuestion) {
            if (!singleSelectQuestion) {
                throw httpErrorHandler.dataIsNotFoundHandler();
                return;
            }

            dataContext.selectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
        });
    };

    function createMultipleSelectQuestion(multipleSelectQuestionTitle, sectionId) {
        return http.post('create/multipleselectquestion', { id: sectionId, title: multipleSelectQuestionTitle }).then(function (multipleSelectQuestion) {
            if (!multipleSelectQuestion) {
                throw httpErrorHandler.dataIsNotFoundHandler();
                return;
            }

            dataContext.selectQuestions.push(modelMapper.mapMultipleSelectQuestion(multipleSelectQuestion));
        });
    };

    function removeSelectQuestion(id) {
        return http.remove('remove/selectquestion', { id: id }).then(function () {
            var index = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                return selectQuestion.id == id;
            });

            dataContext.selectQuestions.splice(index, 1);
            return index;
        });
    };

    function updateSelectQuestion(id, title) {
        return http.put('update/selectquestion', { id: id, title: title }).then(function (updatedSelectQuestion) {
            if (!updatedSelectQuestion) {
                throw httpErrorHandler.dataIsNotFoundHandler();
                return;
            }

            var index = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                return selectQuestion.id == id;
            });

            dataContext.selectQuestions[index].title = updatedSelectQuestion.title;
            dataContext.selectQuestions[index].lastUpdatedDate = updatedSelectQuestion.lastUpdatedDate;
        });
    };

    return {
        getSelectQuestions: getSelectQuestions,
        getSelectQuestionById: getSelectQuestionById,
        createSingleSelectQuestion : createSingleSelectQuestion,
        createMultipleSelectQuestion: createMultipleSelectQuestion,
        updateSelectQuestion: updateSelectQuestion,
        removeSelectQuestion: removeSelectQuestion
    };
});