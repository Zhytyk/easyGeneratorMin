define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers', 'data/selectQuestionRepository'], function (dataContext, http, modelMapper, httpErrorHandlers, selectQuestionRepository) {

    function getAnswerById(questionId, answerId) {
        return selectQuestionRepository.tryInitializeSelectQuestions().then(function () {

            var question = dataContext.selectQuestions.find(function (selectQuestion) {
                return selectQuestion.id == questionId;
            });

            var answer = question.answers.find(function (answer) {
                return answer.id == answerId;
            });

            if (!answer) {
                throw httpErrorHandlers.dataIsNotFoundHandler();
                return;
            }

            return answer;
        });
    };

    function createAnswer(questionId, title, isCorrectly) {
        return http.post('create/answer', {id: questionId, title: title, isCorrectly: String(isCorrectly)})
            .then(function (createdAnswer) {
                if (!createdAnswer) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                    return;
                }

                var index = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                    return selectQuestion.id == questionId;
                });
                dataContext.selectQuestions[index].answers.push(modelMapper.mapAnswer(createdAnswer));
            });
    };

    function updateAnswer(questionId, answerId, title, isCorrectly) {
        return http.put('update/answer', { id: answerId, title: title, isCorrectly: String(isCorrectly) })
                .then(function (updatedAnswer) {
                    if (!updatedAnswer) {
                        throw httpErrorHandlers.dataIsNotFoundHandler();
                        return;
                    }

                    var indexSelectQuestion = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                        return selectQuestion.id == questionId;
                    });

                    var indexAnswer = dataContext.selectQuestions[indexSelectQuestion].answers.findIndex(function (answer) {
                        return answer.id == answerId;
                    });

                    dataContext.selectQuestions[indexSelectQuestion].answers[indexAnswer].title = updatedAnswer.Title;
                    dataContext.selectQuestions[indexSelectQuestion].answers[indexAnswer].isCorrectly = updatedAnswer.IsCorrectly;
                    dataContext.selectQuestions[indexSelectQuestion].answers[indexAnswer].lastUpdatedDate = new Date(updatedAnswer.LastUpdatedDate).toLocaleString();
                });
    };

    function removeAnswer(questionId, answerId) {
        return http.remove('remove/answer', { id: answerId })
                .then(function () {
                    var indexSelectQuestion = dataContext.selectQuestions.findIndex(function (selectQuestion) {
                        return selectQuestion.id == questionId;
                    });

                    var indexAnswer = dataContext.selectQuestions[indexSelectQuestion].answers.findIndex(function (answer) {
                        return answer.id == answerId;
                    });

                    dataContext.selectQuestions[indexSelectQuestion].answers.splice(indexAnswer, 1);
                });
    };


    return {
        getAnswerById: getAnswerById,
        createAnswer: createAnswer,
        updateAnswer: updateAnswer,
        removeAnswer: removeAnswer
    };
});