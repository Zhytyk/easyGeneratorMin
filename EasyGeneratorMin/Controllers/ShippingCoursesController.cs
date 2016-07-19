using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
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
        [OutOfRangeException]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new CourseModel(title, description);

            _courseRepository.Insert(course);
            _courseRepository.Save();

            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("post/updateCourse")]
        [OutOfRangeException]
        public JsonResult UpdateCourse(CourseModel course, string title, string description)
        {
            course.UpdateCourse(title, description);

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