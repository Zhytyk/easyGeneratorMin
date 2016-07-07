using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class CourseController : Controller
    {
        // GET: Course
        [Route("course", Name = "Course")]
        public ActionResult Index()
        {
            return View();
        }
    }
}