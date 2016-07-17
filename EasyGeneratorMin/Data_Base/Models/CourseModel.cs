using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseModel : EducationModel
    {

        public string Description { get; set; }

        public CourseModel()
        { }

        public CourseModel(string title, string description)
        {
            Title = title;
            Description = description;
            CreatedDate = DateTime.Now.ToString();
        }
        
    }
}