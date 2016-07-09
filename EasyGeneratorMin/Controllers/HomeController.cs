using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        [Route("", Name = "Home")]
        public ActionResult Index()
        {
            CourseDataContext CourseDataContext = new CourseDataContext();
            IEnumerable<CourseData> courses = CourseDataContext.CourseData;
            return View(courses);
        }
    }
}