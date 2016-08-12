define(['data/courseRepository', 'preview/mapping/previewMapper'], function (courseRepository, previewMapper) {
    function initializeSections(courseId) {
        var self = this;
        return courseRepository.getCourseById(courseId)
            .then(function (course) {
                self.sections = previewMapper.mapSections(course.sections);
            });
    };


    return {
        initializeSections: initializeSections,

        passingCoursePoint: 0,
        sections : undefined
    };
});