define(['models/course', 'models/section', 'models/singleSelectQuestion'], function (Course, Section, SingleSelectQuestion) {
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

    function mapSingleSelectQuestion(singleSelectQuestion) {
        return new SingleSelectQuestion({
            id: singleSelectQuestion.Id,
            title: singleSelectQuestion.Title,
            creater: singleSelectQuestion.Creater,
            createdDate: new Date(singleSelectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(singleSelectQuestion.LastUpdatedDate).toLocaleString(),
            sectionId: singleSelectQuestion.SectionId
        });
    };

    function mapMultipleSelectQuestion(multipleSelectQuestion) {
        return new SingleSelectQuestion({
            id: multipleSelectQuestion.Id,
            title: multipleSelectQuestion.Title,
            creater: multipleSelectQuestion.Creater,
            createdDate: new Date(multipleSelectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(multipleSelectQuestion.LastUpdatedDate).toLocaleString(),
            sectionId: multipleSelectQuestion.SectionId
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection,
        mapSingleSelectQuestion: mapSingleSelectQuestion,
        mapMultipleSelectQuestion: mapMultipleSelectQuestion
    };
});