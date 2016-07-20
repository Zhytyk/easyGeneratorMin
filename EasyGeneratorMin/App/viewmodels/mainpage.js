define(['plugins/router', 'data/dataContext', 'data/dataRepository'], function (router, dataContext, dataRepository) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
        },
        createCourse: function () {
            router.navigate("#create");
        },
        updateCourse: function(id) {
            router.navigate("#update/" + id);
        },
        removeCourse: function (id) {
            var self = this;
            dataRepository.removeCourse(id)
                .then(function () {
                    dataRepository.getCourses()
                        .then(function (courses) {
                            self.courses(courses);
                        });
                });
        }
    }
})