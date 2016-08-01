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

        public Section() { }

        public Section(string title, Course course)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            Course = course;
        }

        public void UpdateSection(string title)
        {
            ThrowIfTitleInvalid(title);

            Title = title;

            SetLastUpdatedDate();
        }

        private void ThrowIfTitleInvalid(string title)
        {
            if (title.Length < 1 || title.Length > 255)
                throw new ArgumentOutOfRangeException();
        }

    }
}
