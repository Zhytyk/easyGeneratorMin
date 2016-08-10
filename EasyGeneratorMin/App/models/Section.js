define(['models/entity'], function (Entity) {

    function Section(spec) {
        Entity.call(this, spec);
        this.hasPreview = false;
    };

    return Section;
})