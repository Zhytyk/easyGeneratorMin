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
        updateCourse: function (course) {
            router.navigate("#update/course/" + course.id);
        },
        updateSection: function(section) {
            router.navigate("#update/course/" + section.courseId + "/section/" + section.id);
        },
        removeCourse: function (course) {
            var self = this;
            courseRepository.removeCourse(course.id)
                .then(function (index) {
                    self.courses.splice(index, 1);
                });
        },
        removeSection: function (section) {
            var self = this;
            sectionRepository.removeSection(section.id, section.courseId)
                .then(function () {
                    var course = self.courses().find(function (course) {
                        return course.id == section.courseId;
                    });

                    course.sections.valueHasMutated();
                });
        },
        previewCourse: function (course) {
            router.navigate("#preview/course/" + course.id);
        },
    };
})