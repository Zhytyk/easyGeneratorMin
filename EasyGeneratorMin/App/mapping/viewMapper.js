define(['data/dataContext'], function (dataContext) {
    function coursesMapper() {
        var mapCourses = dataContext.courses.map(function (course) {
            var newCourse = {
                id: course.id,
                title: course.title,
                description: course.description,
                creater: course.creater,
                createdDate: course.createdDate,
                lastUpdatedDate: course.lastUpdatedDate,
                sections: ko.observableArray()
            }
            newCourse.sections(course.sections);
            return newCourse;
        });
        return mapCourses;
    };

    return {
        coursesMapper: coursesMapper
    };
});