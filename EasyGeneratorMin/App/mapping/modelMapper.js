define(['models/course', 'models/section', 'models/selectQuestion', 'models/answer'], function (Course, Section, SelectQuestion, Answer) {
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
        var answers = [];
        if (selectQuestion.Answers) {
            selectQuestion.Answers.forEach(function (answer) {
                answers.push(mapAnswer(answer));
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
            answers: answers,
        })
    };

    function mapAnswer(answer) {
        return new Answer({
            id: answer.Id,
            title: answer.Title,
            creater: answer.Creater,
            createdDate: new Date(answer.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(answer.LastUpdatedDate).toLocaleString(),
            isCorrectly: answer.IsCorrectly
        });
    };

    return {
        mapCourse: mapCourse,
        mapSection: mapSection,
        mapSelectQuestion: mapSelectQuestion,
        mapAnswer: mapAnswer
    };
});