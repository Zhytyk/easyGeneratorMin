define(['data/dataContext','data/sectionRepository', 'plugins/router', 'extenders/validationExtenders'], function (dataContext, sectionRepository, router, validationExtenders) {
    function initializeFormPage(courseId, sectionId, self) {
        sectionRepository.getSectionById(courseId, sectionId)
            .then(function(section) {
                self.sectionTitle(section.title);
            });
    };
    return {
        singleSelectQuestions: ko.observableArray([]),
        multipleSelectQuestions: ko.observableArray([]),
        sectionTitle: ko.observable().extend({ required: '' }),
        courseId: '',
        sectionId: '',
        activate: function (courseId, sectionId) {
            var self = this;
            dataContext.initializeSelectQuestions()
                .then(function () {
                    self.courseId = courseId;
                    self.sectionId = sectionId;
                    initializeFormPage(courseId, sectionId, self);
                });
            this.singleSelectQuestions(dataContext.singleSelectQuestions);
            this.multipleSelectQuestions(dataContext.multipleSelectQuestions);
        },
        updateSection: function () {
            sectionRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle()).then(function() {
                router.navigate("#");
            });
        }
    };
})