using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class CourseController : Controller
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<Course> _courseRepository;
        private readonly IMapper _mapper;

        public CourseController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IMapper mapper)
        {
            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _mapper = mapper;
        }


        [Route("overview", Name = "Overview")]
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        [Route("get/courses")]
        public JsonResult GetCourses()
        {
            var courses = _courseRepository.GetCollection();

            var mapCourses = courses.Select(item => _mapper.Map<CourseModel>(item)).ToList();

            return Json(mapCourses, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("create/course")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new Course(title, description);

            _courseRepository.Insert(course);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return Json(mapCourse, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/course")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        public JsonResult UpdateCourse(Course course, string title, string description)
        {
            if (course == null)
                throw new ArgumentNullException();

            course.UpdateCourse(title, description);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return Json(mapCourse, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("remove/course")]
        [NullExceptionFilter]
        public JsonResult RemoveCourse(Course course)
        {
            if (course == null)
                throw new ArgumentNullException();

            _courseRepository.Delete(course);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            _unitOWork.Save();
            base.OnActionExecuted(filterContext);
        }

    }
}