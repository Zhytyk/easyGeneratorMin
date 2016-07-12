define(['models/ownerData'], function (ownerData) {

    function Section(param) {
        ownerData.call(this, param);
        this.id = param.Id;
        this.courseId = param.CourseId;
        this.sectionTitle = param.SectionTitle;
    }

    return Section;
})