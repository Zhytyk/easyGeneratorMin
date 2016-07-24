define(['models/education'], function (education) {

    function Course(spec) {
        education.call(this, spec);
        this.description = spec.description;
        this.sections = spec.sections;
    };

    return Course;
})