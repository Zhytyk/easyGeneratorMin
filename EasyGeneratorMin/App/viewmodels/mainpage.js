define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/courseRepository', 'data/sectionRepository', 'mapping/viewMapper'], function (app, router, dataContext, courseRepository, sectionRepository, viewMapper) {
    return {
        courses: ko.observableArray([]),
        activate: function () {
            this.courses(viewMapper.coursesMapper());
        },
        createCourse: function () {
            router.navigate("#create/course");
        },
        updateCourse: function (id) {
            router.navigate("#update/course/" + id);
        },
        updateSection: function(sectionId, courseId) {
            router.navigate("#update/course/" + courseId + "/section/" + sectionId);
        },
        removeCourse: function (id) {
            var self = this;
            courseRepository.removeCourse(id)
                .then(function (index) {
                    self.courses.splice(index, 1);
                });
        },
        removeSection: function (sectionId, courseId) {
            var self = this;
            sectionRepository.removeSection(sectionId, courseId)
                .then(function () {
                    var course = self.courses().find(function (course) {
                        return course.id == courseId;
                    });

                    course.sections.valueHasMutated();
                });
        },
        previewSection: function (sectionId, courseId) {
            router.navigate("#preview/course/" + courseId + "/section/" + sectionId);
        },
    };
})