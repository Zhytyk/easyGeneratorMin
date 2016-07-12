define(['plugins/router', 'data/dataCourseInfoContext'], function (router, dataCourseInfoContext) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataCourseInfoContext.courses);
        },
        AddCourse: function () {
            router.navigate("#addCourse");
        },
        editCourse: function(course) {
            router.navigate("#editCourse/" + course.id);
        },
        removeCourse: function (id) {
            dataCourseInfoContext.removeCourseById(id);
            this.courses(dataCourseInfoContext.courses);
        }
    }
})