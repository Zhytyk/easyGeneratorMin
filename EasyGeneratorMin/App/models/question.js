define(['models/education'], function (education) {

    function Question(param) {
        education.call(this, param);
        this.sectionId = param.SectionId;
    }

    return Question;
})