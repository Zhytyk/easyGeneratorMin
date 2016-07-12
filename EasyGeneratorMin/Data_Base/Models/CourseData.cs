using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseData : OwnerDataInfo
    {
        
        public string Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public CourseData()
        {
            Id = Guid.NewGuid().ToString();
        }
        
    }
}