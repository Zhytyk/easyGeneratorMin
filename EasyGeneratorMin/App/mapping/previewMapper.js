define(['data/courseRepository'], function (courseRepository) {

    function previewCourseMapper(courseId) {

        return courseRepository.getCourseById(courseId).then(function (course) {

            return course.sections.map(function (section) {

                return {
                    id: section.id,
                    title: section.title
                };
            });
        });
    };



    function previewSelectQuestionsMapper(selectQuestions) {
        return selectQuestions.map(function (selectQuestion) {

            return {

                id: selectQuestion.id,
                answers: selectQuestion.answers().map(function (answer) {

                    return {
                        id: answer.id,
                        isCorrectly: answer.isCorrectly == "true" ? true : answer.isCorrectly == "false" ? false : answer.isCorrectly,
                    };
                })
            };
        });
    };

    return {
        previewCourseMapper: previewCourseMapper,
        previewSelectQuestionsMapper: previewSelectQuestionsMapper
    };
});