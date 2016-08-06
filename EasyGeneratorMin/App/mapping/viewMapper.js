define(['data/dataContext'], function (dataContext) {
    function coursesMapper() {
        var mapCourses = dataContext.courses.map(function (course) {
            var newCourse = {
                id: course.id,
                title: course.title,
                description: course.description,
                creater: course.creater,
                createdDate: course.createdDate,
                lastUpdatedDate: course.lastUpdatedDate,
                sections: ko.observableArray()
            }
            newCourse.sections(course.sections);
            return newCourse;
        });
        return mapCourses;
    };

    function selectQuestionsMapper() {

        var mapSelectQuestions = dataContext.selectQuestions.map(function (selectQuestion) {
            var newSelectQuestion = {
                id: selectQuestion.id,
                title: selectQuestion.title,
                description: selectQuestion.description,
                creater: selectQuestion.creater,
                createdDate: selectQuestion.createdDate,
                lastUpdatedDate: selectQuestion.lastUpdatedDate,
                sectionId: selectQuestion.sectionId,
                type: selectQuestion.type,
                answers: ko.observableArray()
            }
            newSelectQuestion.answers(selectQuestion.answers);
            return newSelectQuestion;
        });

        return mapSelectQuestions;
    };

    function previewSelectQuestionMapper() {

        var mapSelectQuestions = dataContext.selectQuestions.map(function (selectQuestion) {
            var newSelectQuestion = {
                id: selectQuestion.id,
                title: selectQuestion.title,
                sectionId: selectQuestion.sectionId,
                type: selectQuestion.type,
                answers: ko.observableArray()
            };

            newSelectQuestion.answers(selectQuestion.answers.map(function (answer) {
                var newAnswer = {
                    id: answer.id,
                    title: answer.title,
                    isCorrectly: false,
                };

                return newAnswer;
            }));

            return newSelectQuestion;
        });

        return mapSelectQuestions;
    };

    return {
        coursesMapper: coursesMapper,
        selectQuestionsMapper: selectQuestionsMapper,
        previewSelectQuestionMapper: previewSelectQuestionMapper,
    };
});