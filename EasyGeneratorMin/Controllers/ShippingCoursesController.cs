using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly ICourseRepository<CourseModel> _courseRepository;

        public ShippingCoursesController(ICourseRepository<CourseModel> courseRepository)
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

        [HttpGet]
        [Route("get/createCourse")]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new CourseModel(title, description);

            _courseRepository.Create(course);

            return Json(course, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Route("get/updateCourse")]
        public JsonResult UpdateCourse(string id, string title, string description)
        {
            var course = _courseRepository.GetUpdatedCourse(id, title, description);

            _courseRepository.Update(course);

            return Json(course, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Route("get/removeCourse")]
        public void RemoveCourse(string id)
        {
            _courseRepository.RemoveFromDb(id);
        }

    }
}