define(['models/education'], function (education) {

    function Section(spec) {
        education.call(this, spec);
        this.courseId = spec.courseId;
    };

    return Section;
})