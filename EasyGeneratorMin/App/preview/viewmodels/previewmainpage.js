﻿define(['plugins/router', 'data/courseRepository', 'preview/data/previewRepository'], function (router, courseRepository, previewRepository) {
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
                        return "You have " + self.passingCoursePoint().toFixed(3) + " from " + self.totalPassingCoursePoint + " progress point of passing preview course.";
                    });
                });
        },
        previewSection: function (section) {
            router.navigate('preview/course/' + section.courseId + '/section/' + section.id);
        },
        back: function () { router.navigateBack();}
    };
});