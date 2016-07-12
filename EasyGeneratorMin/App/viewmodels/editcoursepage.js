define(['data/dataCourseInfoContext'], function (dataCourseInfoContext) {
    return {
        id: '',
        title: ko.observable(),
        description: ko.observable(),
        activate: function (id) {
            this.id = id;
        },
        editCourse: function () {
            var course = { Id: this.id, Title: this.title, Description: this.description };
            dataCourseInfoContext.editCourse(course);
        }

    }
})