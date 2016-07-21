define(['models/course'], function (Course) {
    function mapCourse(course) {
        console.log(course.CreatedDate+ "  " +course.LastUpdatedDate);
        return new Course({
            id: course.Id,
            title: course.Title,
            description: course.Description,
            creater: course.Creater,
            createdDate: Date.parse(course.CreatedDate),
            lastUpdatedDate: Date(course.LastUpdatedDate).toLocaleString()
        });
    };
    return {
        mapCourse: mapCourse
    };
});