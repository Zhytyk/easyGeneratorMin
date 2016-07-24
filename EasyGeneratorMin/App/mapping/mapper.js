define(['models/course', 'models/section'], function (Course, Section) {
    function mapCourse(course) {
        var sections = [];
        if (course.Sections) {
            course.Sections.forEach(function (section) {
                sections.push(mapSection(section));
            });
        }
        return new Course({
            id: course.Id,
            title: course.Title,
            description: course.Description,
            creater: course.Creater,
            createdDate: new Date(parseInt(course.CreatedDate.replace(/\/Date\((-?\d+)\)\//, '$1'))).toLocaleString(),
            lastUpdatedDate: new Date(parseInt(course.LastUpdatedDate.replace(/\/Date\((-?\d+)\)\//, '$1'))).toLocaleString(),
            sections: sections
        });
    };

    function mapSection(section) {
        return new Section({
            id: section.Id,
            courseId: section.CourseId,
            title: section.Title,
            creater: section.Creater,
            createdDate: new Date(parseInt(section.CreatedDate.replace(/\/Date\((-?\d+)\)\//, '$1'))).toLocaleString(),
            lastUpdatedDate: new Date(parseInt(section.LastUpdatedDate.replace(/\/Date\((-?\d+)\)\//, '$1'))).toLocaleString(),
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection
    };
});