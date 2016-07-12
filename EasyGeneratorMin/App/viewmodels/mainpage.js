define(['plugins/router', 'data/dataCourseInfoContext'], function (router, dataCourseInfoContext) {
    return {
        courses: ko.observableArray([]),
        idCourseForDelete: ko.observable(),
        activate: function () {
            this.courses(dataCourseInfoContext.courses);
        },
        AddCourse: function () {
            router.navigate("#addCourse");
        },
        removeCourse: function (id) {
            self = this
            dataCourseInfoContext.removeCourseById(id);
            this.courses(dataCourseInfoContext.courses);
        }
    }
})