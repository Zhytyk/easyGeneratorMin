﻿using Autofac.Integration.WebApi;
using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;
using System.Web.Http.Results;

namespace EasyGeneratorMin.Web
{

    public class CourseController : ApiController
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<Course> _courseRepository;
        private readonly IMapper _mapper;

        public CourseController() { }

        public CourseController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IMapper mapper) : this()
        {

            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("get/courses")]
        public IEnumerable<CourseModel> GetCourses()
        {
            var courses = _courseRepository.GetCollection();

            var mapCourses = courses.Select(item => _mapper.Map<CourseModel>(item)).ToList();

            return mapCourses;
        }

        [HttpPost]
        [Route("create/course")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public CourseModel CreateCourse(CourseModel courseModel)
        {

            var course = new Course(courseModel.Title, courseModel.Description);

            _courseRepository.Insert(course);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return mapCourse;
        }

        [HttpPut]
        [Route("update/course")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public CourseModel UpdateCourse([ModelBinder(typeof(EntityModelBinder<Course>))]Course course, Dictionary<string, string> spec)
        {
            if (course == null)
                throw new ArgumentNullException();

            course.UpdateCourse(spec["title"], spec["description"]);

            var mapCourse = _mapper.Map<CourseModel>(course);

            return mapCourse;
        }

        [HttpDelete]
        [Route("remove/course")]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public void RemoveCourse([ModelBinder(typeof(EntityModelBinder<Course>))]Course course)
        {
            if (course == null)
                throw new ArgumentNullException();

            _courseRepository.Delete(course);
            
        }

    }
}
