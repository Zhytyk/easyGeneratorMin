define(['models/course'], function (Course) {
    function mapCourse(course) {
        return new Course(course);
    }
    return {
        mapCourse: mapCourse
    }
});