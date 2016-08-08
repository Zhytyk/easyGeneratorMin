define(['data/courseRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, validationExtenders, router) {
    return {
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function () {
            this.title("SomeCourse");
            this.description("SomeDescription");
        },
        createCourse: function () { 
            courseRepository.createCourse(this.title, this.description).then(function() {
                router.navigateBack();
            });
        },
        back: function () { router.navigateBack(); }
    };
})