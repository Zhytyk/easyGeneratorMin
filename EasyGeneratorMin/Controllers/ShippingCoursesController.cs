﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
{
    public class ShippingCoursesController : Controller
    {

        IRepositoryCourse CourseRepository;

        public ShippingCoursesController(IRepositoryCourse CourseRepository)
        {
            this.CourseRepository = CourseRepository;
        }


        [HttpPost]
        [Route("post/getCourses", Name = "AjaxPostGetCourses")]
        public JsonResult GetCoursesData()
        {
            IEnumerable<CourseData> Courses = CourseRepository.GetCourses();
            return Json(Courses ,JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        [Route("post/addCourse", Name =  "AjaxPostAddCourse")]
        public JsonResult AddCourse(CourseData Course)
        {
            CourseRepository.AddCourse(Course);
            return Json(Course, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        [Route("get/removeCourse", Name = "AjaxPostRemoveCourse")]
        public void RemoveCourse(string id)
        {
            CourseRepository.RemoveCourse(id);
        }

        [HttpPost]
        [Route("post/editCourse", Name = "AjaxPostEditCourse")]
        public JsonResult ModifyCourse(CourseData Course)
        {
            CourseRepository.ModifyCourse(Course);
            return Json(Course, JsonRequestBehavior.AllowGet);
        }
    }
}