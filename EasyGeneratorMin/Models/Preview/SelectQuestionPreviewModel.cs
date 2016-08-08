using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin.Web
{
    public class SelectQuestionPreviewModel
    {
        public Guid Id { get; set; }

        public List<AnswerPreviewModel> Answers { get; set; }
    }
}