using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly IRepository<CourseModel> _courseRepository;

        public ShippingCoursesController(IRepository<CourseModel> courseRepository)
        {
            _courseRepository = courseRepository;
        }


        [HttpGet]
        [Route("get/getCourses")]
        public JsonResult GetCoursesData()
        {
            IEnumerable<CourseModel> сourses = _courseRepository.GetCollection();
            return Json(сourses ,JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("post/createCourse")]
        [ArgumentException]
        public JsonResult CreateCourse(CourseModel course)
        {
            _courseRepository.Insert(course);
            _courseRepository.Save();
            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("post/updateCourse")]
        [ArgumentException]
        public JsonResult UpdateCourse(string id, CourseModel course)
        {
            _courseRepository.Update(course);
            _courseRepository.Save();
            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("post/removeCourse")]
        public JsonResult RemoveCourse(string id)
        {
            _courseRepository.Delete(id);
            _courseRepository.Save();

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

    }
}