using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class SelectQuestion : Entity
    {

        public List<Answer> Answers { get; set; }

        public Section Section { get; set; }

        public string Type { get; set; }

        public SelectQuestion()
        {
            Answers = new List<Answer>();
        }

        public SelectQuestion(string title, Section section)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            Section = section;
        }

        public void ThrowIfHasOneMoreCorrectAnswers(string isCorrectly)
        {
            if(Type == "Single" && bool.Parse(isCorrectly))
            {
                if (Answers.Count(c => c.IsCorrectly == true) > 0)
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}
