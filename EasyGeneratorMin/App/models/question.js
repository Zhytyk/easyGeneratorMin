define(['models/education'], function (education) {

    function Question(spec) {
        education.call(this, spec);
        this.sectionId = spec.sectionId;
    }

    return Question;
})