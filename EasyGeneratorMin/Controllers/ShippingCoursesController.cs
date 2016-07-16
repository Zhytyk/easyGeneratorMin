using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly IRepositoryCourse _courseRepository;

        public ShippingCoursesController(IRepositoryCourse courseRepository)
        {
            _courseRepository = courseRepository;
        }


        [HttpPost]
        [Route("post/getCourses")]
        public JsonResult GetCoursesData()
        {
            IEnumerable<CourseData> Courses = _courseRepository.GetCourses();
            return Json(Courses ,JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("post/addCourse")]
        public JsonResult AddCourse(CourseData Course)
        {
            _courseRepository.AddCourse(Course);
            return Json(Course, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Route("get/removeCourse")]
        public void RemoveCourse(string id)
        {
            _courseRepository.RemoveCourse(id);
        }

        [HttpPost]
        [Route("post/updateCourse")]
        public JsonResult UpdateCourse(CourseData Course)
        {
            _courseRepository.ModifyCourse(Course);
            return Json(Course, JsonRequestBehavior.AllowGet);
        }
    }
}