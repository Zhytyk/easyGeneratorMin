define(['data/dataRepository', 'plugins/router'], function(dataRepository, router){
    return {
        id: '',
        sectionTitle: ko.observable(),
        activate: function (id) {
            this.id = id;
        },
        updateSection: function () {
            dataRepository.updateSection(this.id, this.sectionTitle).then(function () {
                router.navigate("#");
            });
        }
    };
})