define(['plugins/router', 'data/courseRepository', 'preview/data/previewRepository', 'errorhandlers/httperrorhandlers'], function (router, courseRepository, previewRepository, httpErrorHandler) {
    return {
        sections: ko.observableArray(),
        courseId: '',
        passingCoursePoint: ko.observable(),
        totalPassingCoursePoint: '',
        progressPassingCourse: '',
        activate: function (courseId) {
            var self = this;
            this.courseId = courseId;
            this.passingCoursePoint(previewRepository.getPassingCoursePoint());
            return previewRepository.getPreviewSections(courseId)
                .then(function (sections) {
                    self.sections(sections);
                    self.totalPassingCoursePoint = sections.length;
                    self.progressPassingCourse = ko.computed(function () {
                        if (!isFinite(self.passingCoursePoint())) {
                            throw httpErrorHandler.dataIsNotFoundHandler();
                        }

                        return "You have " + self.passingCoursePoint().toFixed(3) + " from " + self.totalPassingCoursePoint + " progress point of passing preview course.";
                    });
                });
        },
        previewSection: function (section) {
            console.log(section);
            if (section.progressPreview == 1) {
                alert("You have already passed this preview section!");
                return undefined;
            }


            router.navigate('preview/course/' + this.courseId + '/section/' + section.id);
        },
        back: function () { router.navigateBack();}
    };
});