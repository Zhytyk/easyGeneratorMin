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
        private readonly IRepository<Section> _sectionRepository;
        private readonly IMapper _mapper;

        public CourseController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IRepository<Section> sectionRepository, IMapper mapper)
        {
            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _sectionRepository = sectionRepository;
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
        [OutOfRangeException]
        public JsonResult CreateCourse(string title, string description)
        {
            var course = new Course(title, description);

            _courseRepository.Insert(course);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return Json(mapCourse, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/course")]
        [OutOfRangeException]
        public JsonResult UpdateCourse(Course course, string title, string description)
        {

            course.UpdateCourse(title, description);

            _courseRepository.Update(course);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return Json(mapCourse, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("remove/course")]
        public JsonResult RemoveCourse(Guid id)
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