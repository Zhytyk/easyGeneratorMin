define(['plugins/router', 'data/dataContext', 'data/dataRepository'], function (router, dataContext, dataRepository) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(dataContext.courses);
        },
        addCourse: function () {
            router.navigate("#addCourse");
        },
        editCourse: function(course) {
            router.navigate("#editCourse/" + course.id);
        },
        removeCourse: function (id) {
            self = this;
            dataRepository.removeCourse(id).then(function () { self.courses(dataRepository.getCourses()); });
        }
    }
})