define(['data/courseRepository'], function (courseRepository) {
    function coursesMapper(courses) {

        return courses.map(function (course) {
            var newCourse = {
                id: course.id,
                title: course.title,
                description: course.description,
                creater: course.creater,
                createdDate: course.createdDate.toLocaleString(),
                lastUpdatedDate: course.lastUpdatedDate.toLocaleString(),
                sections: ko.observableArray()
            }
            newCourse.sections(course.sections.map(function(section){
                return {
                    id: section.id,
                    title: section.title,
                    creater: section.creater,
                    createdDate: section.createdDate.toLocaleString(),
                    lastUpdatedDate: section.lastUpdatedDate.toLocaleString(),
                    courseId: section.courseId,
                };
            }));
            return newCourse;
        });
    }

    function selectQuestionsMapper(selectQuestions) {

        var mapSelectQuestions = selectQuestions.map(function (selectQuestion) {
            var newSelectQuestion = {
                id: selectQuestion.id,
                title: selectQuestion.title,
                creater: selectQuestion.creater,
                createdDate: selectQuestion.createdDate.toLocaleString(),
                lastUpdatedDate: selectQuestion.lastUpdatedDate.toLocaleString(),
                sectionId: selectQuestion.sectionId,
                answers: ko.observableArray()
            }
            newSelectQuestion.answers(selectQuestion.answers.map(function (answer) {
                return {
                    id: answer.id,
                    title: answer.title,
                    creater: answer.creater,
                    createdDate: answer.createdDate.toLocaleString(),
                    lastUpdatedDate: answer.lastUpdatedDate.toLocaleString(),
                    isCorrectly: answer.isCorrectly,
                    selectQuestionId: answer.selectQuestionId,
                };
            }));
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