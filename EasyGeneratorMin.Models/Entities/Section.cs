using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class Section : Entity
    {

        public Course Course { get; set; }

        public List<SelectQuestion> SelectQuestions { get; set; }

        public Section()
        {
            SelectQuestions = new List<SelectQuestion>();
        }

        public Section(string title, Course course)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            Course = course;
        }

    }
}
