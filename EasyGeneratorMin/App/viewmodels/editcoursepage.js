define(['data/dataCourseInfoContext', 'data/dataCourseInfoRepository'], function (dataCourseInfoContext, dataCourseInfoRepository) {
    console.log(self);
    function getCourseById(id) {
        return dataCourseInfoContext.courses.filter(function (course) {
            return course.id == id
        })[0];
    };
    function initializeFieldsPage(id, self) {
        self.currentCourse = getCourseById(id);
        self.title = self.currentCourse.title;
        self.description = self.currentCourse.description;
    };
    return {
        currentCourse: '',
        title: ko.observable(),
        description: ko.observable(),
        activate: function (id) {
            initializeFieldsPage(id, this);
        },
        editCourse: function () {
            var course = { Id: this.currentCourse.id, Title: this.title, Description: this.description, CreatedDate: this.currentCourse.createdDate };
            dataCourseInfoRepository.editCourse(course);
        }
    }
})