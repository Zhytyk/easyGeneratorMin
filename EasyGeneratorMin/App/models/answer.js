define(['models/entity'], function (Entity) {
    function SelectAnswer(spec) {
        Entity.call(this, spec);
        this.isCorrectly = spec.isCorrectly;
        this.selectQuestionId = spec.selectQuestionId;
    }

    return SelectAnswer;
});