using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class Course : Entity
    {

        public string Description { get; set; }

        public List<Section> Sections { get; set; }

        public Course()
        {
            Sections = new List<Section>();
        }

        public Course(string title, string description)
        {

            ThrowIfTitleInvalid(title);
            ThrowIfDescriptionInvalid(description);

            Title = title;
            Description = description;

            SetCreatedDate();
        }

        public void UpdateCourse(string title, string description)
        {

            ThrowIfTitleInvalid(title);
            ThrowIfDescriptionInvalid(description);

            Title = title;
            Description = description;

            SetLastUpdatedDate();

        }

        private void ThrowIfTitleInvalid(string title)
        {
            if (title.Length < 1 || title.Length > 255)
                throw new ArgumentOutOfRangeException();
        }

        private void ThrowIfDescriptionInvalid(string description)
        {
            if (description.Length < 1)
                throw new ArgumentOutOfRangeException();
        }

    }
}
