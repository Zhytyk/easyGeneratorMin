using System;
using System.Collections.Generic;

namespace EasyGeneratorMin.Web
{
    public class SectionModel : EntityModel
    {
        public Guid CourseId { get; set; }

        public List<SelectQuestionModel> SelectQuestions { get; set; }
    }
}
