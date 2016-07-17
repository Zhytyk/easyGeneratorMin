using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class EducationModel
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Creater { get; set; }

        public string CreatedDate { get; set; }

        public string LastModifiedDate { get; set; }

        public EducationModel()
        {
            Id = Guid.NewGuid().ToString();
            LastModifiedDate = DateTime.Now.ToString();
            Creater = "Pavel Vaydalauskas";
        }

    }
}