define(['data/dataCourseInfoRepository'], function (dataCourseInfoRepository) {
    return {
        title: ko.observable(),
        description: ko.observable(),
        activate: function () {

        },
        addCourse: function () {
            var course = { Title: this.title, Description: this.description, CreatedDate: new Date().toLocaleString()};
            dataCourseInfoRepository.addCourse(course);
        }

    }
})