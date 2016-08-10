define(['plugins/router', 'mapping/previewMapper'], function (router, previewMapper) {
    return {
        sections: ko.observableArray(),
        courseId : '',
        activate: function (courseId) {
            var self = this;
            this.courseId = courseId;
            return previewMapper.previewCourseMapper(this.courseId).then(function (sections) {
                self.sections(sections);
            });
        },
        previewSection: function (sectionId) {
            router.navigate('preview/course/' + this.courseId + '/section/' + sectionId);
        },
        back: function () { router.navigateBack();}
    };
});