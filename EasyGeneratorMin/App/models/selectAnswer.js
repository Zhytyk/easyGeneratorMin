define(['models/entity'], function (Entity) {
    function SelectAnswer(spec) {
        Entity.call(this, spec);
        this.isCorrectly = spec.isCorrectly;
    }

    return SelectAnswer;
});