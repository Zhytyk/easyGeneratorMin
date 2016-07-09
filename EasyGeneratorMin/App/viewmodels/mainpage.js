define(['knockout','plugins/router', 'data/dataCourseInfoContext'], function (ko, router, dataCourseInfoContext) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataCourseInfoContext.courses);
        },
        AddCourse: function () {
            router.navigate("#addCourse");
        }
    }
})