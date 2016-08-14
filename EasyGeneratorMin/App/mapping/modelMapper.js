define(['models/course', 'models/section', 'models/singleselectquestion', 'models/multipleselectquestion', 'models/answer'],
    function (Course, Section, SingleSelectQuestion, MultipleSelectQuestion, Answer) {

    function mapCourse(course) {
        var sections = [];
        if (course.Sections) {
            _.each(course.Sections, function (section) {
                sections.push(mapSection(section));
            });
        }
        return new Course({
            id: course.Id,
            title: course.Title,
            description: course.Description,
            creater: course.Creater,
            createdDate: new Date(course.CreatedDate),
            lastUpdatedDate: new Date(course.LastUpdatedDate),
            sections: sections
        });
    }

    function mapSection(section) {
        return new Section({
            id: section.Id,
            title: section.Title,
            creater: section.Creater,
            createdDate: new Date(section.CreatedDate),
            lastUpdatedDate: new Date(section.LastUpdatedDate),
            courseId: section.CourseId,
        });
    }

    function mapSingleSelectQuestion(selectQuestion) {
        var answers = [];
        if (selectQuestion.Answers) {
            _.each(selectQuestion.Answers, function (answer) {
                answers.push(mapAnswer(answer));
            });
        }
        return new SingleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            type: selectQuestion.Type,
            createdDate: new Date(selectQuestion.CreatedDate),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate),
            sectionId: selectQuestion.SectionId,
            answers: answers,
        })
    }

    function mapMultipleSelectQuestion(selectQuestion) {
        var answers = [];
        if (selectQuestion.Answers) {
            _.each(selectQuestion.Answers, function (answer) {
                answers.push(mapAnswer(answer));
            });
        }
        return new MultipleSelectQuestion({
            id: selectQuestion.Id,
            title: selectQuestion.Title,
            creater: selectQuestion.Creater,
            type: selectQuestion.Type,
            createdDate: new Date(selectQuestion.CreatedDate),
            lastUpdatedDate: new Date(selectQuestion.LastUpdatedDate),
            sectionId: selectQuestion.SectionId,
            answers: answers,
        })
    }

    function mapAnswer(answer) {
        return new Answer({
            id: answer.Id,
            title: answer.Title,
            creater: answer.Creater,
            createdDate: new Date(answer.CreatedDate),
            lastUpdatedDate: new Date(answer.LastUpdatedDate),
            isCorrectly: answer.IsCorrectly,
            selectQuestionId: answer.SelectQuestionId,
        });
    }

    return {
        mapCourse: mapCourse,
        mapSection: mapSection,
        mapSingleSelectQuestion: mapSingleSelectQuestion,
        mapMultipleSelectQuestion: mapMultipleSelectQuestion,
        mapAnswer: mapAnswer
    };
});