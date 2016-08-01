define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers'], function (dataContext, http, modelMapper, httpErrorHandler) {
    function getSelectQuestions() {
        return new Promise(function (resolve, reject) {
            if (!dataContext.singleSelectQuestion) {
                dataContext.singleSelectQuestions = [];

                http.get('/get/singleselectquestions').then(function (singleSelectQuestions) {
                    singleSelectQuestions.forEach(function (singleSelectQuestion) {
                        dataContext.singleSelectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
                    });

                    if (!dataContext.multipleSelectQuestion) {
                        dataContext.multipleSelectQuestions = [];

                        http.get('/get/multipleselectquestions').then(function (multipleSelectQuestions) {
                            multipleSelectQuestions.forEach(function (multipleSelectQuestion) {
                                dataContext.multipleSelectQuestions.push(modelMapper.mapMultipleSelectQuestion(multipleSelectQuestion));
                            });

                            resolve("success");
                        });
                    }

                    else {
                        resolve("success");
                    }
                });
            }
            else {
                resolve("success");
            }
        });
    };

    function createSingleSelectQuestion(singleSelectQuestionTitle, sectionId) {
        return http.post('create/singleselectquestion', { id: sectionId, title: singleSelectQuestionTitle }).then(function (singleSelectQuestion) {
            dataContext.singleSelectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
        });
    };

    function createMultipleSelectQuestion(multipleSelectQuestionTitle, sectionId) {
        return http.post('create/multipleselectquestion', { id: sectionId, title: multipleSelectQuestionTitle }).then(function (multipleSelectQuestion) {
            dataContext.multipleSelectQuestions.push(modelMapper.mapMultipleSelectQuestion(multipleSelectQuestion));
        });
    };

    function removeSingleSelectQuestion(id) {
        return http.remove('remove/singleselectquestion', { id: id }).then(function () {
            var index = dataContext.singleSelectQuestions.findIndex(function (singleSelectQuestion) {
                return singleSelectQuestion.id == id;
            });

            dataContext.singleSelectQuestions.splice(index, 1);
            return index;
        });
    };

    function removeMultipleSelectQuestion(id) {
        return http.remove('remove/multipleselectquestion', { id: id }).then(function () {
            var index = dataContext.multipleSelectQuestions.findIndex(function (multipleSelectQuestion) {
                return multipleSelectQuestion.id == id;
            });

            dataContext.multipleSelectQuestions.splice(index, 1);
            return index;
        });
    };

    return {
        getSelectQuestions : getSelectQuestions,
        createSingleSelectQuestion : createSingleSelectQuestion,
        createMultipleSelectQuestion: createMultipleSelectQuestion,
        removeSingleSelectQuestion: removeSingleSelectQuestion,
        removeMultipleSelectQuestion: removeMultipleSelectQuestion
    };
});