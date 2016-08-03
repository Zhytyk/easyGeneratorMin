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

        private readonly IRepository<Course> _courseRepository;
        private readonly IMapper _mapper;

        public CourseController(IRepository<Course> courseRepository, IMapper mapper)
        {
            _courseRepository = courseRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("get/courses")]
        public IEnumerable<CourseModel> GetCourses()
        {
            var courses = _courseRepository.GetCollection();

            CourseDataContext db = new CourseDataContext();

            

            db.SelectQuestion.Add(new SingleSelectQuestion
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
            });
            db.SaveChanges();
            db.SelectQuestion.Add(new MultipleSelectQuestion
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
            });
            db.SaveChanges();
            db.SelectAnswer.Add(new SelectAnswer
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
                IsCorrectly = true,
                SelectQuestion = db.SelectQuestion.FirstOrDefault()
            });
            db.SaveChanges();
            db.SelectAnswer.Add(new SelectAnswer
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
                IsCorrectly = true,
                SelectQuestion = db.MultipleSelectQuestion.FirstOrDefault()
            });
            db.SaveChanges();
            db.SelectAnswer.Add(new SelectAnswer
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
                IsCorrectly = true,
                SelectQuestion = db.MultipleSelectQuestion.FirstOrDefault()
            });
            db.SaveChanges();
            db.SelectAnswer.Add(new SelectAnswer
            {
                Id = Guid.NewGuid(),
                Title = "New",
                Creater = "I am",
                CreatedDate = DateTime.UtcNow,
                LastUpdatedDate = DateTime.UtcNow,
                IsCorrectly = true,
                SelectQuestion = db.SingleSelectQuestion.FirstOrDefault()
            });
            db.SaveChanges();


            return courses.Select(item => _mapper.Map<CourseModel>(item)).ToList();
        }

        [HttpPost]
        [Route("create/course")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public CourseModel CreateCourse(Dictionary<string, string> spec)
        {
            var course = new Course(spec["title"], spec["description"]);

            _courseRepository.Insert(course);

            return _mapper.Map<CourseModel>(course);
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

            course.Update(spec["title"], spec["description"]); 

            return _mapper.Map<CourseModel>(course);
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
