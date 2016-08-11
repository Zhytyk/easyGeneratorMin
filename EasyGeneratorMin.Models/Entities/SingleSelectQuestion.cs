using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class SingleSelectQuestion : SelectQuestion
    {

        public SingleSelectQuestion() { }

        public SingleSelectQuestion(string title, Section section) : base(title, section)
        {
            Type = "Single";
        }

        public void ResetIfAnswerIsSingle(string isCorrectly)
        {
            var answer = Answers.FirstOrDefault(c => c.IsCorrectly == true);

            if (answer != null && bool.Parse(isCorrectly) != false)
                answer.IsCorrectly = false;
        }

    }
}
