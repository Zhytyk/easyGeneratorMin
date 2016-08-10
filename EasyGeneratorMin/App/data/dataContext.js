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
        return http.get('get/singleselectquestions')
            .then(function (singleSelectQuestions) {
                singleSelectQuestions.forEach(function (singleSelectQuestion) {
                    self.selectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
                });
                return http.get('get/multipleselectquestions')
                    .then(function (multipleSelectQuestions) {
                        multipleSelectQuestions.forEach(function (multipleSelectQuestion) {
                            self.selectQuestions.push(modelMapper.mapMultipleSelectQuestion(multipleSelectQuestion));
                        });
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