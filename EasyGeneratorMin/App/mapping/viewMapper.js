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

        var mapSingleSelectQuestions = dataContext.singleSelectQuestions.map(function (singleSelectQuestion) {
            var newSelectQuestion = {
                id: singleSelectQuestion.id,
                title: singleSelectQuestion.title,
                description: singleSelectQuestion.description,
                creater: singleSelectQuestion.creater,
                createdDate: singleSelectQuestion.createdDate,
                lastUpdatedDate: singleSelectQuestion.lastUpdatedDate,
                sectionId: singleSelectQuestion.sectionId
            }
            return newSelectQuestion;
        });

        var mapMultipleSelectQuestions = dataContext.multipleSelectQuestions.map(function (multipleSelectQuestion) {
            var newSelectQuestion = {
                id: multipleSelectQuestion.id,
                title: multipleSelectQuestion.title,
                description: multipleSelectQuestion.description,
                creater: multipleSelectQuestion.creater,
                createdDate: multipleSelectQuestion.createdDate,
                lastUpdatedDate: multipleSelectQuestion.lastUpdatedDate,
                sectionId: multipleSelectQuestion.sectionId
            }
            return newSelectQuestion;
        });

        return {
            mapSingleSelectQuestions: mapSingleSelectQuestions,
            mapMultipleSelectQuestions: mapMultipleSelectQuestions
        }
    }

    return {
        coursesMapper: coursesMapper,
        selectQuestionsMapper: selectQuestionsMapper
    };
});