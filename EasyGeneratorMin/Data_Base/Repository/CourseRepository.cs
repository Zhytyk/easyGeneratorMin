using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseRepository : IRepositoryCourse
    {
        private CourseDataContext CourseDataContext;
        public CourseRepository(CourseDataContext CourseDataContext)
        {
            this.CourseDataContext = CourseDataContext;
        }


        public IEnumerable<CourseData> GetCourses()
        {
            return CourseDataContext.CourseData;
        }

        public void AddCourse(CourseData Course)
        {
            CourseDataContext.Entry(Course).State = EntityState.Added;
            CourseDataContext.SaveChanges();
        }

        public void ModifyCourse(CourseData Course)
        {
            var existedCourseId = CourseDataContext.CourseData.Find(Course.Id);

            if (existedCourseId != null)
            {
                CourseDataContext.Entry(existedCourseId).CurrentValues.SetValues(Course);
                CourseDataContext.SaveChanges();
            }
        }

        public void RemoveCourse(string id)
        {
            CourseData Course = GetCourseById(id);
            CourseDataContext.Entry(Course).State = EntityState.Deleted;
            CourseDataContext.SaveChanges();
        }

        public CourseData GetCourseById(string id)
        {
            return CourseDataContext.CourseData.Find(id);
        }
        
    }
}