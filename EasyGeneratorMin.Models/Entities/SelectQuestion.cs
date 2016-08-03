using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class SelectQuestion : Entity
    {
        public Section Section { get; set; }

        public List<SelectAnswer> SelectAnswers { get; set; }

        public SelectQuestion() { }

        public SelectQuestion(string title, Section section)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            Section = section;
        }
    }
}
