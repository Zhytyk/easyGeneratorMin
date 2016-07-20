using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<CourseModel> _courseRepository;

        public ShippingCoursesController(IUnitOfWork unitOfWork)
        {
            _unitOWork = unitOfWork;
            _courseRepository = unitOfWork.GetRepository<CourseModel>();
        }

        [HttpGet]
        [Route("get/courses")]
        public JsonResult GetCoursesData()
        {
            IEnumerable<CourseModel> сourses = _courseRepository.GetCollection();
            return Json(сourses, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("create/course")]
        [OutOfRangeException]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new CourseModel(title, description);

            _courseRepository.Insert(course);

            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/course")]
        [OutOfRangeException]
        public JsonResult UpdateCourse(CourseModel course, string title, string description)
        {
            course.UpdateCourse(title, description);

            _courseRepository.Update(course);

            return Json(course, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("remove/course")]
        public JsonResult RemoveCourse(string id)
        {
            _courseRepository.Delete(id);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            _unitOWork.Save();
            base.OnActionExecuted(filterContext);
        }
    }
}