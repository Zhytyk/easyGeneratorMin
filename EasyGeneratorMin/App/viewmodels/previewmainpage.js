﻿define(['plugins/router', 'data/courseRepository', 'data/previewRepository'], function (router, courseRepository, previewRepository) {
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
            return courseRepository.getCourseById(this.courseId).then(function (course) {
                self.sections(course.sections);
                self.totalPassingCoursePoint = course.sections.length;
                self.progressPassingCourse = ko.computed(function () {
                    return "You have " + self.passingCoursePoint() + " from " + self.totalPassingCoursePoint + " progress point of passing preview course.";
                });
            });
        },
        previewSection: function (sectionId) {
            router.navigate('preview/course/' + this.courseId + '/section/' + sectionId);
        },
        back: function () { router.navigateBack();}
    };
});