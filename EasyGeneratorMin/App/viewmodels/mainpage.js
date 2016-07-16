define(['plugins/router', 'data/dataContext', 'data/dataRepository'], function (router, dataContext, dataRepository) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
        },
        addCourse: function () {
            router.navigate("#addCourse");
        },
        updateCourse: function(id) {
            router.navigate("#updatecourse/" + id);
        },
        removeCourse: function (id) {
            self = this;
            dataRepository.removeCourse(id).then(function () { self.courses(dataRepository.getCourses()); });
        }
    }
})