using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class ShippingCoursesController : Controller
    {

        [HttpPost]
        [Route("post/getCourses", Name = "AjaxPostGetCourses")]
        public JsonResult GetCoursesData()
        {
            CourseDataContext CourseDataContext = new CourseDataContext();
            IEnumerable<CourseData> courses = CourseDataContext.CourseData;

            return Json(courses ,JsonRequestBehavior.AllowGet);
        }
    }
}