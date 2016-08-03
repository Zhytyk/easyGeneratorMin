define(['models/course', 'models/section', 'models/selectQuestion', 'models/selectAnswer'], function (Course, Section, SelectQuestion, SelectAnswer) {
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

    function mapSelectQuestion(selectQuestion) {
        var selectAnswers = [];
        if (selectQuestion.SelectAnswers) {
            selectQuestion.SelectAnswers.forEach(function (selectAnswer) {
                selectAnswers.push(mapSelectAnswer(selectAnswer));
            });
        }
        return new SelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            createdDate: new Date(selectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate).toLocaleString(),
            type : selectQuestion.Type,
            sectionId: selectQuestion.SectionId,
            selectAnswers: selectAnswers,
        })
    };

    function mapSelectAnswer(selectAnswer) {
        return new SelectAnswer({
            id: selectAnswer.Id,
            title: selectAnswer.Title,
            creater: selectAnswer.Creater,
            createdDate: new Date(selectAnswer.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectAnswer.LastUpdatedDate).toLocaleString(),
            isCorrectly: selectAnswer.isCorrectly
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection,
        mapSelectQuestion: mapSelectQuestion,
        mapSelectAnswer: mapSelectAnswer
    };
});