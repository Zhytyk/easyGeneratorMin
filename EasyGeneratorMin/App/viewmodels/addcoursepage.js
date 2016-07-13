define(['data/dataCourseInfoContext'], function (dataCourseInfoContext) {
    return {
        title: ko.observable(),
        description: ko.observable(),
        activate: function () {

        },
        addCourse: function () {
            var course = { Title: this.title, Description: this.description, CreatedDate: new Date().toLocaleString()};
            dataCourseInfoContext.addCourse(course);
        }

    }
})