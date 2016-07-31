define(['models/entity'], function (entity) {

    function Course(spec) {
        entity.call(this, spec);
        this.description = spec.description;
        this.sections = spec.sections;
    };

    return Course;
})