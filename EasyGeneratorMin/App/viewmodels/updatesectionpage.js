define(['data/sectionRepository', 'plugins/router', 'extenders/validationExtenders'], function (sectionRepository, router, validationExtenders) {
    function initializeFormPage(courseId, sectionId, self) {
        sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };
    return {
        courseId: '',
        sectionId: '',
        sectionTitle: ko.observable().extend({ required: ''}),
        activate: function (courseId, sectionId) {
            this.courseId = courseId;
            this.sectionId = sectionId;
            initializeFormPage(courseId, sectionId, this);
        },
        updateSection: function () {
            sectionRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle()).then(function() {
                router.navigate("#");
            });
        }
    };
})