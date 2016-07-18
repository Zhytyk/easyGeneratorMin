using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin
{
    [ModelBinder(typeof(CourseModelBinder))]
    public class CourseModel : EducationModel
    {
        public string Description { get; set; }


        public void UpdateCourse(string title, string description)
        {

            ThrowIfTitleInvalid(title);
            ThrowIfDescriptionInvalid(description);

            Title = title;
            Description = description;

            UpdateLastUpdatedDate();

        }

        private void ThrowIfTitleInvalid(string title)
        {
            if (title.Length < 1 || title.Length > 255)
                throw new ArgumentOutOfRangeException("The title have to be in range 1 to 255");
        }

        private void ThrowIfDescriptionInvalid(string description)
        {
            if (description.Length < 1)
                throw new ArgumentOutOfRangeException("The description is required");
        }

    }
}