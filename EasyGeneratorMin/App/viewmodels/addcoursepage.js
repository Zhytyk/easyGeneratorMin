define(['models/course','data/dataCourseInfoContext'], function (Course, dataCourseInfoContext) {
    return {
        title: ko.observable(),
        description: ko.observable(),
        activate: function() {
        },
        addCourse: function () {
            var course = { Title: this.title, Description: this.description };
            dataCourseInfoContext.addCourse(course);
        }

    }
})