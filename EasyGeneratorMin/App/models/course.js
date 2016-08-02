define(['models/entity'], function (Entity) {

    function Course(spec) {
        Entity.call(this, spec);
        this.description = spec.description;
        this.sections = spec.sections;
    };

    return Course;
})