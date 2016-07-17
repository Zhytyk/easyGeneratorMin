using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace EasyGeneratorMin
{
    public class CourseRepository : IRepository<CourseModel>
    {
        private CourseDataContext _db;
        public CourseRepository(CourseDataContext db)
        {
            _db = db;
        }


        public IEnumerable<CourseModel> GetCollection()
        {
            return _db.Courses;
        }

        public CourseModel GetCourseById(string id)
        {
            return _db.Courses.Find(id);
        }

        public void Create(CourseModel сourse)
        {
            _db.Entry(сourse).State = EntityState.Added;
            _db.SaveChanges();
        }

        public void Update(CourseModel сourse)
        {
            var existedCourseId = _db.Courses.Find(сourse.Id);

            if (existedCourseId != null)
            {
                _db.Entry(existedCourseId).CurrentValues.SetValues(сourse);
                _db.SaveChanges();
            }
        }

        public void Remove(string id)
        {
            CourseModel сourse = GetCourseById(id);
            _db.Entry(сourse).State = EntityState.Deleted;
            _db.SaveChanges();
        }
        
    }
}