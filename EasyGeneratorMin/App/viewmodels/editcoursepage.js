define(['data/dataCourseInfoContext'], function (dataCourseInfoContext) {
    function getCreatedDateCourseById(id) {
        return dataCourseInfoContext.courses.filter(function (course) {
            return course.id == id
        })[0].createdDate;
    }
    return {
        id: '',
        title: ko.observable(),
        description: ko.observable(),
        activate: function (id) {
            this.id = id;
        },
        editCourse: function () {
            var course = { Id: this.id, Title: this.title, Description: this.description, CreatedDate: getCreatedDateCourseById(this.id) };
            dataCourseInfoContext.editCourse(course);
        }

    }
})