define(['models/course', 'models/section', 'models/singleSelectQuestion', 'models/multipleSelectQuestion'], function (Course, Section, SingleSelectQuestion, MultipleSelectQuestion) {
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

    function mapSingleSelectQuestion(selectQuestion) {
        return new SingleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            createdDate: new Date(selectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate).toLocaleString(),
            sectionId: selectQuestion.SectionId
        });
    };

    function mapMultipleSelectQuestion(selectQuestion) {
        return new MultipleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            createdDate: new Date(selectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate).toLocaleString(),
            sectionId: selectQuestion.SectionId
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection,
        mapSingleSelectQuestion: mapSingleSelectQuestion,
        mapMultipleSelectQuestion: mapMultipleSelectQuestion
    };
});