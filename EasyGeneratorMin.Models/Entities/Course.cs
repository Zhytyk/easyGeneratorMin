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
        }

        public void Update(string title, string description)
        {

            ThrowIfDescriptionInvalid(description);
            Description = description;

            Update(title);
        }

    }
}
