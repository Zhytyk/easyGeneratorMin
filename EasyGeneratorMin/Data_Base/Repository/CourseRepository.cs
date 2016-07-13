using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseRepository : IRepositoryCourse
    {

        CourseDataContext CourseDataContext = new CourseDataContext();

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
            CourseDataContext.Entry(Course).State = EntityState.Modified;
            CourseDataContext.SaveChanges();
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