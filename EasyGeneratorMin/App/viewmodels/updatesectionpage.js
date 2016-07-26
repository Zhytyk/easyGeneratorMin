define(['data/sectionRepository', 'plugins/router'], function(sectionRepository, router){
    return {
        courseId: '',
        sectionId: '',
        sectionTitle: ko.observable(),
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