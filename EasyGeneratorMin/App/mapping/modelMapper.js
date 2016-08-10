define(['models/course', 'models/section', 'models/singleselectquestion', 'models/multipleselectquestion', 'models/answer'],
    function (Course, Section, SingleSelectQuestion, MultipleSelectQuestion, Answer) {

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
        var answers = [];
        if (selectQuestion.Answers) {
            selectQuestion.Answers.forEach(function (answer) {
                answers.push(mapAnswer(answer));
            });
        }
        return new SingleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            type: selectQuestion.Type,
            createdDate: new Date(selectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate).toLocaleString(),
            sectionId: selectQuestion.SectionId,
            answers: answers,
        })
    };

    function mapMultipleSelectQuestion(selectQuestion) {
        var answers = [];
        if (selectQuestion.Answers) {
            selectQuestion.Answers.forEach(function (answer) {
                answers.push(mapAnswer(answer));
            });
        }
        return new MultipleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            type: selectQuestion.Type,
            createdDate: new Date(selectQuestion.CreatedDate).toLocaleString(),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate).toLocaleString(),
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
        mapSingleSelectQuestion: mapSingleSelectQuestion,
        mapMultipleSelectQuestion: mapMultipleSelectQuestion,
        mapAnswer: mapAnswer
    };
});