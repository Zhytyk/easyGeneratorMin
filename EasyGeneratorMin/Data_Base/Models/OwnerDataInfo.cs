using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class OwnerDataInfo
    {

        public string Owner { get; set; }

        public string CreatedDate { get; set; }

        public string LastModifiedDate { get; set; }

        public OwnerDataInfo()
        {
            Owner = "Pavel Vaydalauskas";
            CreatedDate = DateTime.Now.ToString();
            LastModifiedDate = DateTime.Now.ToString();
        }

    }
}