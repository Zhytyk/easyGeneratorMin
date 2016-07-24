

using System;

namespace EasyGeneratorMin.Models
{
    public class SectionModel : Entity
    {

        public Guid CourseModelId { get; set; }

        public void UpdateSection(string title)
        {
            Title = title;
        }

    }
}
