define(['data/dataCourseInfoRepository', 'extenders/validationExtenders'], function (dataCourseInfoRepository, validationExtenders) {
    return {
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function () {
            this.title("SomeCourse");
            this.description("SomeDescription");
        },
        addCourse: function () {
            var course = { Title: this.title, Description: this.description, CreatedDate: new Date().toLocaleString()};
            dataCourseInfoRepository.addCourse(course);
        }

    }
})