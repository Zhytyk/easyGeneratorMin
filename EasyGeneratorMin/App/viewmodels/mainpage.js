define(['plugins/router', 'data/dataCourseInfoContext', 'data/dataCourseInfoRepository'], function (router, dataCourseInfoContext, dataCourseInfoRepository) {
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
            dataCourseInfoRepository.removeCourseById(id);
            this.courses(dataCourseInfoContext.courses);
        }
    }
})