define(['data/courseRepository', 'data/sectionRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, sectionRepository, validationExtenders, router) {
    function initializeForm(id, self) {
        return courseRepository.getCourseById(id)
            .then(function(course) {
                self.courseTitle(course.title);
                self.courseDescription(course.description);
            });
    };
    return {
        courseId: '',
        courseTitle: ko.observable().extend({ rangeRequired: "" }),
        courseDescription: ko.observable().extend({ required: "" }),
        sectionTitle: ko.observable().extend({ required: "" }),
        activate: function (id) {
            this.courseId = id;
            this.sectionTitle("SomeSection");
            return initializeForm(id, this);
        },
        updateCourse: function () {
            courseRepository.updateCourse(this.courseId, this.courseTitle(), this.courseDescription()).then(function() {
                router.navigateBack();
            });
        },
        createSection: function () {
            sectionRepository.createSection(this.courseId, this.sectionTitle()).then(function() {
                router.navigateBack();
            });
        },
    };

})