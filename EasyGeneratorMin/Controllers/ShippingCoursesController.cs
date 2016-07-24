﻿using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
{
    public class ShippingCoursesController : Controller
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly ICourseRepository<CourseModel> _courseRepository;
        private readonly IRepository<SectionModel> _sectionRepository;

        public ShippingCoursesController(IUnitOfWork unitOfWork, ICourseRepository<CourseModel> courseRepository, IRepository<SectionModel> sectionRepository)
        {
            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _sectionRepository = sectionRepository;
        }

        [HttpGet]
        [Route("get/courses")]
        public JsonResult GetCourses()
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
        [Route("create/section")]
        [OutOfRangeException]
        public JsonResult CreateSection(Guid courseId, string title)
        {
            var section = new SectionModel
            {
                Title = title,
                CreatedDate = DateTime.Now,
                CourseModel = _courseRepository.GetValueById(courseId)
            };

            _sectionRepository.Insert(section);

            return Json(section, JsonRequestBehavior.DenyGet);
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