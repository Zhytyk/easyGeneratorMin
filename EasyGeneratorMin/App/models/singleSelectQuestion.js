define(['models/entity'], function (entity) {
    function SingleSelectQuestion(spec) {
        entity.call(this, spec);
        this.sectionId = spec.sectionId;
    }
    return SingleSelectQuestion;
});