define(['data/dataRepository', 'extenders/validationExtenders', 'plugins/router'], function (dataRepository, validationExtenders, router) {
    return {
        title: ko.observable().extend({ rangeRequired: "" }),
        description: ko.observable().extend({ required: "" }),
        activate: function () {
            this.title("SomeCourse");
            this.description("SomeDescription");
        },
        createCourse: function () {
            dataRepository.createCourse(this.title, this.description).then(function () {
                router.navigate("#");
            });
        }

    }
})