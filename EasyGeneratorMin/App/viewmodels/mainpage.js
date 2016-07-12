define(['plugins/router', 'data/dataCourseInfoContext'], function (router, dataCourseInfoContext) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataCourseInfoContext.courses);
        },
        AddCourse: function () {
            router.navigate("#addCourse");
        },
        removeCourse: function (id) {
            dataCourseInfoContext.removeCourseById(id);
            this.courses(dataCourseInfoContext.courses);
        }
    }
})