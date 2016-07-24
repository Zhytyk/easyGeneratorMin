define(['http/httpWrapper', 'mapping/mapper'], function (http, mapper) {

    function initialize() {
        var self = this;
        return http.get('get/courses').then(function (courses) {
            courses.forEach(function (course) {
                self.courses.push(mapper.mapCourse(course));
            });
            //return http.get('get/sections').then(function (sections) {
            //    sections.forEach(function (course) {
            //        self.sections.push(mapper.mapSection);
            //    });
            //});
        });
    };

    return {
        initialize: initialize,
        courses: [],
        sections: []
    };
});