define(['data/dataCourseInfoContext', 'data/dataCourseInfoRepository'], function (dataCourseInfoContext, dataCourseInfoRepository) {
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
            dataCourseInfoRepository.editCourse(course);
        }

    }
})