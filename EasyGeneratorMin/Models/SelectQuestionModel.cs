using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin.Web
{
    public class SelectQuestionModel : EntityModel
    {
        public Guid SectionId { get; set; }

        public string Type { get; set; }

        public List<AnswerModel> Answers { get; set; }
    }
}