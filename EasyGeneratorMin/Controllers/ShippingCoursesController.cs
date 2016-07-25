using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Web.Configuration;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<Course> _courseRepository;
        private readonly IRepository<Section> _sectionRepository;

        public ShippingCoursesController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IRepository<Section> sectionRepository)
        {
            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _sectionRepository = sectionRepository;
        }

        [HttpGet]
        [Route("get/courses")]
        public JsonResult GetCourses()
        {
            var courses = _courseRepository.GetCollection();

            return Json(courses, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("create/course")]
        [OutOfRangeException]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new Course(title, description);

            _courseRepository.Insert(course);

            var mapCourse = new CourseModel
            {
                CreatedDate = course.CreatedDate,
                Creater = course.Creater,
                Description = course.Description,
                Id = course.Id,
                LastUpdatedDate = course.LastUpdatedDate,
                Sections = course.Sections.ConvertAll<SectionModel>(Converter<Section, SectionModel> converter),
                Title = course.Title
            };

            return Json(mapCourse, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("create/section")]
        //[OutOfRangeException]
        public JsonResult CreateSection(Guid courseId, string title)
        {
            var section = new SectionModel
            {
                Title = title,
                CreatedDate = DateTime.Now,
            };

            _sectionRepository.Insert(section);

            return Json(section, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/course")]
        [OutOfRangeException]
        public JsonResult UpdateCourse(Course course, string title, string description)
        {
            course.UpdateCourse(title, description);

            _courseRepository.Update(course);

            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/course")]
        [OutOfRangeException]
        public JsonResult UpdateSection(Guid id, string title)
        {
            var section = _sectionRepository.GetValueById(id);

            section.UpdateSection(title);

            _sectionRepository.Update(section);

            return Json(section, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("remove/course")]
        public JsonResult RemoveCourse(Guid id)
        {
            _courseRepository.Delete(id);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }


        [HttpPost]
        [Route("remove/section")]
        public JsonResult RemoveSection(Guid id)
        {
            _sectionRepository.Delete(id);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            _unitOWork.Save();
            base.OnActionExecuted(filterContext);
        }
    }
}