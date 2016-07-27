define(['data/courseRepository', 'data/sectionRepository', 'extenders/validationExtenders', 'plugins/router'], function (courseRepository, sectionRepository, validationExtenders, router) {
    function initializeFormPage(id, self) {
        courseRepository.getCourseById(id)
            .then(function (course) {
                self.CourseId = course.id;
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
            initializeFormPage(id, this);
            this.sectionTitle("SomeSection");
        },
        updateCourse: function () {
            courseRepository.updateCourse(this.CourseId, this.courseTitle(), this.courseDescription()).then(function (error) {
                if (error) {
                    alert(error);
                }
                else {
                    router.navigate("#");
                }
            });
        },
        createSection: function () {
            sectionRepository.createSection(this.CourseId, this.sectionTitle()).then(function (error) {
                if (error) {
                    alert(error);
                }
                else {
                    router.navigate("#");
                }
            });
        },
    };

})