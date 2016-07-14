define(['data/dataCourseInfoContext', 'data/dataCourseInfoRepository', 'extenders/validationExtenders'], function (dataCourseInfoContext, dataCourseInfoRepository, validationExtenders) {
    function getCourseById(id) {
        return dataCourseInfoContext.courses.filter(function (course) {
            return course.id == id
        })[0];
    };
    function initializeFormPage(id, self) {
        self.currentCourse = getCourseById(id);
        self.title(self.currentCourse.title);
        self.description(self.currentCourse.description);
    };
    return {
        currentCourse: '',
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function (id) {
            initializeFormPage(id, this);
        },
        editCourse: function () {
            var course = { Id: this.currentCourse.id, Title: this.title, Description: this.description, CreatedDate: this.currentCourse.createdDate };
            dataCourseInfoRepository.editCourse(course);
        },
    }

})