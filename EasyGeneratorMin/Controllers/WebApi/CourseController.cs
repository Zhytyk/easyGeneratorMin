using Autofac.Integration.WebApi;
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
    public class CourseController : MainWebApiController
    {

        private readonly IRepository<Course> _courseRepository;

        public CourseController(IRepository<Course> courseRepository, IMapper mapper) : base(mapper)
        {
            _courseRepository = courseRepository;
        }

        [HttpGet]
        [Route("get/courses")]
        public IEnumerable<CourseModel> GetCourses()
        {
            var courses = _courseRepository.GetCollection();

            return courses.Select(item => _mapper.Map<CourseModel>(item)).ToList();
        }

        [HttpPost]
        [Route("create/course")]
        public CourseModel CreateCourse(Dictionary<string, string> spec)
        {
            var course = new Course(spec["title"], spec["description"]);

            _courseRepository.Insert(course);

            return _mapper.Map<CourseModel>(course);
        }

        [HttpPut]
        [Route("update/course")]
        public CourseModel UpdateCourse([ModelBinder(typeof(EntityModelBinder<Course>))]Course course, Dictionary<string, string> spec)
        {
            if (course == null)
                throw new ArgumentNullException();

            course.Update(spec["title"], spec["description"]); 

            return _mapper.Map<CourseModel>(course);
        }

        [HttpDelete]
        [Route("remove/course")]
        public void RemoveCourse([ModelBinder(typeof(EntityModelBinder<Course>))]Course course)
        {
            if (course == null)
                throw new ArgumentNullException();

            _courseRepository.Delete(course);
            
        }

    }
}
