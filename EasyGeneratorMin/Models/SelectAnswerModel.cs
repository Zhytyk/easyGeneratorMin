using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin.Web
{
    public class SelectAnswerModel : EntityModel
    {
        public string SelectQuestionId { get; set; }

        public bool IsCorrectly { get; set; }
    }
}