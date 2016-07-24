using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EasyGeneratorMin.Models
{

    public class CourseModel : Entity
    {
        public string Description { get; set; }

        public List<SectionModel> Sections { get; set; }

        public CourseModel() {
            Sections = new List<SectionModel>();
        }

        public CourseModel(string title, string description)
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