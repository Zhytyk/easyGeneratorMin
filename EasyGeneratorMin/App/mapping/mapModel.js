define(['models/course'], function (Course) {
    function mapCourse(course) {
        return new Course({
            id: course.Id,
            title: course.Title,
            description: course.Description,
            creater: course.Creater,
            createdDate: new Date(parseInt(course.CreatedDate.replace(/\/Date\((-?\d+)\)\//, '$1'))),
            lastUpdatedDate: new Date(parseInt(course.LastUpdatedDate.replace(/\/Date\((-?\d+)\)\//, '$1')))
        });
    };
    return {
        mapCourse: mapCourse
    };
});