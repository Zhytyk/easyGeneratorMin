﻿using System;
using System.Web.Mvc;

namespace EasyGeneratorMin.Models
{

    public class CourseModel : EducationModel
    {
        public string Description { get; set; }

        public CourseModel() { }

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