define(['data/dataRepository', 'plugins/router'], function(dataRepository, router){
    return {
        courseId: '',
        sectionId: '',
        sectionTitle: ko.observable(),
        activate: function (courseId, sectionId) {
            this.courseId = courseId;
            this.sectionId = sectionId;
        },
        updateSection: function () {
            dataRepository.updateSection(this.sectionId, this.courseId, this.sectionTitle).then(function () {
                router.navigate("#");
            });
        }
    };
})