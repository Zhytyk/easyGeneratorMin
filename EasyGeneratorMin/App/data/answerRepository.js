define(['data/dataContext', 'http/httpWrapper', 'mapping/modelMapper', 'errorhandlers/httperrorhandlers', 'data/selectQuestionRepository'], function (dataContext, http, modelMapper, httpErrorHandlers, selectQuestionRepository) {

    function getAnswerById(questionId, answerId) {
        return selectQuestionRepository.tryInitializeSelectQuestions()
            .then(function () {

                var question = _.find(dataContext.selectQuestions, function (selectQuestion) {
                    return selectQuestion.id == questionId;
                });

                var answer = _.find(question.answers, function (answer) {
                    return answer.id == answerId;
                });

                if (!answer) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }

                return answer;
            });
    };

    function createAnswer(questionId, title) {
        return http.post('create/answer', {id: questionId, title: title})
            .then(function (createdAnswer) {
                if (!createdAnswer) {
                    throw httpErrorHandlers.dataIsNotFoundHandler();
                }

                var selectQuestion = _.find(dataContext.selectQuestions, function (selectQuestion) {
                    return selectQuestion.id == questionId;
                });

                selectQuestion.answers.push(modelMapper.mapAnswer(createdAnswer));
            });
    };

    function updateAnswer(questionId, answerId, title, isCorrectly) {
        return http.put('update/answer', { id: answerId, title: title, isCorrectly: String(isCorrectly) })
                .then(function (updatedAnswer) {
                    if (!updatedAnswer) {
                        throw httpErrorHandlers.dataIsNotFoundHandler();
                    }

                    var selectQuestion = _.find(dataContext.selectQuestions, function (selectQuestion) {
                        return selectQuestion.id == questionId;
                    });

                    var answer = _.find( selectQuestion.answers, function (answer) {
                        return answer.id == answerId;
                    });

                    resetCorrectAnswersIfSingleQuestion(isCorrectly, selectQuestion);

                    answer.title = updatedAnswer.Title;
                    answer.isCorrectly = updatedAnswer.IsCorrectly;
                    answer.lastUpdatedDate = new Date(updatedAnswer.LastUpdatedDate);
                });
    };

    function resetCorrectAnswersIfSingleQuestion(isCorrectly, selectQuestion) {

        if (isCorrectly !== true || selectQuestion.type != "Single") {
            return undefined;
        }

        var correctAnswer = _.find(selectQuestion.answers, function (answer) {
            return answer.isCorrectly == true;
        });

        if (correctAnswer) {
            correctAnswer.isCorrectly = false;
        }
    };

    function removeAnswer(questionId, answerId) {
        return http.remove('remove/answer', { id: answerId })
                .then(function () {
                    var selectQuestion = _.find(dataContext.selectQuestions, function (selectQuestion) {
                        return selectQuestion.id == questionId;
                    });

                    var answerIndex = _.findIndex(selectQuestion.answers, function (answer) {
                        return answer.id == answerId;
                    });

                    selectQuestion.answers.splice(answerIndex, 1);
                });
    };


    return {
        getAnswerById: getAnswerById,
        createAnswer: createAnswer,
        updateAnswer: updateAnswer,
        removeAnswer: removeAnswer
    };
});