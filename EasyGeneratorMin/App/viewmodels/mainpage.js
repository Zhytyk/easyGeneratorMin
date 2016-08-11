define(['durandal/app', 'plugins/router', 'data/dataContext', 'data/courseRepository', 'data/sectionRepository', 'mapping/viewMapper', 'data/previewRepository'],
    function (app, router, dataContext, courseRepository, sectionRepository, viewMapper, previewRepository) {

    return {
        courses: ko.observableArray([]),
        activate: function () {
            var self = this;
            previewRepository.resetPreviewMode();
            return viewMapper.coursesMapper()
                .then(function (courses) {
                    self.courses(courses);
                });
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
        previewCourse: function (courseId) {
            router.navigate("#preview/course/" + courseId);
        },
    };
})