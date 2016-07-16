define(['data/dataRepository', 'extenders/validationExtenders', 'plugins/router'], function (dataRepository, validationExtenders, router) {
    return {
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function () {
            this.title("SomeCourse");
            this.description("SomeDescription");
        },
        addCourse: function () {
            var course = { Title: this.title, Description: this.description, CreatedDate: new Date().toLocaleString()};
            dataRepository.addCourse(course).then(function () {
                router.navigate("#");
            });
        }

    }
})