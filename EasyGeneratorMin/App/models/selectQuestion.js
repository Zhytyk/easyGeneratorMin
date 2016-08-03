define(['models/entity'], function (Entity) {
    function SelectQuestion(spec) {
        Entity.call(this, spec);
        this.sectionId = spec.sectionId;
        this.type = spec.type;
    }
    return SelectQuestion;
});