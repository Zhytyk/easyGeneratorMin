using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseRepository : IRepositoryCourse
    {
        private CourseDataContext _courseDataContext;
        public CourseRepository(CourseDataContext courseDataContext)
        {
            _courseDataContext = courseDataContext;
        }


        public IEnumerable<CourseData> GetCourses()
        {
            return _courseDataContext.CourseData;
        }

        public CourseData GetCourseById(string id)
        {
            return _courseDataContext.CourseData.Find(id);
        }

        public void AddCourse(CourseData Course)
        {
            _courseDataContext.Entry(Course).State = EntityState.Added;
            _courseDataContext.SaveChanges();
        }

        public void ModifyCourse(CourseData Course)
        {
            var existedCourseId = _courseDataContext.CourseData.Find(Course.Id);

            if (existedCourseId != null)
            {
                _courseDataContext.Entry(existedCourseId).CurrentValues.SetValues(Course);
                _courseDataContext.SaveChanges();
            }
        }

        public void RemoveCourse(string id)
        {
            CourseData Course = GetCourseById(id);
            _courseDataContext.Entry(Course).State = EntityState.Deleted;
            _courseDataContext.SaveChanges();
        }
        
    }
}