using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    interface IRepositoryQuestion
    {

        IEnumerable<QuestionSectionData> GetSections();

        void AddQuestion(QuestionSectionData Section);

        void RemoveQuestion(QuestionSectionData Section);

        void ModifyQuestion(QuestionSectionData Section);

        SectionCourseData GetSectionByQuestion();

    }
}
