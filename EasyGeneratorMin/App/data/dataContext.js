define(['http/httpWrapper', 'mapping/modelMapper'], function (http, modelMapper) {

    function initializeCourses() {
        var self = this;
        return http.get('/get/courses').then(function (courses) {
            courses.forEach(function (course) {
                self.courses.push(modelMapper.mapCourse(course));
            });
        });
    };

    function initializeSelectQuestions() {
        var self = this;
        return http.get('/get/singleselectquestions').then(function (singleSelectQuestions) {
            singleSelectQuestions.forEach(function (singleSelectQuestion) {
                self.singleSelectQuestions.push(modelMapper.mapSingleSelectQuestion(singleSelectQuestion));
            });
            return http.get('/get/multipleselectquestions').then(function (multipleSelectQuestions) {
                multipleSelectQuestions.forEach(function (multipleSelectQuestion) {
                    self.multipleSelectQuestions.push(modelMapper.mapMultipleelectQuestion(multipleSelectQuestion));
                });
            });
        });
    };

    return {
        initializeCourses: initializeCourses,
        initializeSelectQuestions: initializeSelectQuestions,

        courses: [],
        singleSelectQuestions: [],
        multipleSelectQuestions: []
    };
});