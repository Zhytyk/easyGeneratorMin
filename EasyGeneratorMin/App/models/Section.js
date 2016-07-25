define(['models/education'], function (education) {

    function Section(spec) {
        education.call(this, spec);
    };

    return Section;
})