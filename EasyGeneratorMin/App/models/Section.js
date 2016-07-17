define(['models/education'], function (educationa) {

    function Section(param) {
        education.call(this, param);
        this.courseId = param.CourseId;
    }

    return Section;
})