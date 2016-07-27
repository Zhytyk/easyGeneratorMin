define(['data/sectionRepository', 'plugins/router', 'extenders/validationExtenders'], function (sectionRepository, router, validationExtenders) {
    return {
        courseId: '',
        sectionId: '',
        sectionTitle: ko.observable().extend({ required: ''}),
        activate: function (courseId, sectionId) {
            this.courseId = courseId;
            this.sectionId = sectionId;
        },
        updateSection: function () {
            sectionRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle).then(function () {
                router.navigate("#");
            });
        }
    };
})