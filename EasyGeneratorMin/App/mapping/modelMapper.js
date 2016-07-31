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
            createdDate: new Date(course.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(course.LastUpdatedDate).toLocaleString(),
            sections: sections
        });
    };

    function mapSection(section) {
        return new Section({
            id: section.Id,
            title: section.Title,
            creater: section.Creater,
            createdDate: new Date(section.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(section.LastUpdatedDate).toLocaleString(),
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection
    };
});