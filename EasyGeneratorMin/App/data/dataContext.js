define(['http/httpWrapper', 'mapping/modelMapper'], function (http, modelMapper) {

    function initializeCourses() {
        var self = this;
        return http.get('/get/courses')
            .then(function (courses) {
                courses.forEach(function (course) {
                    self.courses.push(modelMapper.mapCourse(course));
                });
            });
    };

    function initializeSelectQuestions() {
        var self = this;
        return http.get('get/selectquestions')
            .then(function (selectQuestions) {
                console.log(self.courses);
                selectQuestions.forEach(function (selectQuestion) {
                    self.selectQuestions.push(modelMapper.mapSelectQuestion(selectQuestion));
                });
            });
    };

    return {
        initializeCourses: initializeCourses,
        initializeSelectQuestions: initializeSelectQuestions,

        courses: [],
        selectQuestions: undefined
    };
});