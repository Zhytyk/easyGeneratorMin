define(['models/education'], function (education) {

    function Course(param) {
        education.call(this, param);
        this.description = param.Description;
    }

    return Course;
})