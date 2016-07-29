define(['data/courseRepository', 'data/sectionRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, sectionRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        courseRepository.getCourseById(id)
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
            initializeFormPage(id, this);
        },
        updateCourse: function () {
            courseRepository.updateCourse(this.courseId, this.courseTitle(), this.courseDescription()).then(function() {
                router.navigate("#")
            });
        },
        createSection: function () {
            sectionRepository.createSection(this.courseId, this.sectionTitle()).then(function() {
                router.navigate("#");
            });
        },
    };

})