define(['models/ownerData'], function (ownerData) {

    function Question(param) {
        ownerData.call(this, param);
        this.id = param.Id;
        this.sectionId = param.SectionId;
        this.questionTitle = param.QuestionTitle;
    }

    return Question;
})