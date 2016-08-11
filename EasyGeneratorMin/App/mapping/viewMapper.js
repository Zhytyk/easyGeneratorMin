define(['data/courseRepository'], function (courseRepository) {
    function coursesMapper() {
        return courseRepository.getCourses()
            .then(function (courses) {
                return courses.map(function (course) {
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
            });
    }

    function selectQuestionsMapper(selectQuestions) {

        var mapSelectQuestions = selectQuestions.map(function (selectQuestion) {
            var newSelectQuestion = {
                id: selectQuestion.id,
                title: selectQuestion.title,
                description: selectQuestion.description,
                creater: selectQuestion.creater,
                createdDate: selectQuestion.createdDate,
                lastUpdatedDate: selectQuestion.lastUpdatedDate,
                sectionId: selectQuestion.sectionId,
                answers: ko.observableArray()
            }
            newSelectQuestion.answers(selectQuestion.answers);
            return newSelectQuestion;
        });
        return mapSelectQuestions;
    };

    function previewSelectQuestionMapper(selectQuestions) {

        var mapSelectQuestions = selectQuestions.map(function (selectQuestion) {
            var newSelectQuestion = {
                id: selectQuestion.id,
                title: selectQuestion.title,
                type: selectQuestion.type,
                sectionId: selectQuestion.sectionId,
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