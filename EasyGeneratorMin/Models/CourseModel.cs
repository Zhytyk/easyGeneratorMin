﻿using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{ 
    public class CourseModel : EntityModel
    {
        public string Description { get; set; }

        public List<SectionModel> Sections { get; set; }

    }
}