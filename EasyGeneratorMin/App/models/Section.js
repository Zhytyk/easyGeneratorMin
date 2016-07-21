define(['models/education'], function (educationa) {

    function Section(spec) {
        education.call(this, spec);
        this.courseId = spec.courseId;
    }

    return Section;
})