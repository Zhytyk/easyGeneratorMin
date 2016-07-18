using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
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

        public string LastUpdatedDate { get; set; }

        public EducationModel()
        {
            Id = Guid.NewGuid().ToString();
            LastUpdatedDate = DateTime.Now.ToString();
            Creater = "Pavel Vaydalauskas";
        }

        public void UpdateLastUpdatedDate()
        {
            LastUpdatedDate = DateTime.Now.ToString();
        }

    }
}