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

        public CourseModel GetValueById(string id)
        {
            return _db.Courses.Find(id);
        }

        public void Create(CourseModel course)
        {
            _db.Entry(course).State = EntityState.Added;
            _db.SaveChanges();
        }

        public void Update(CourseModel сourse)
        {
            var existedCourse = GetValueById(сourse.Id);

            if (existedCourse != null)
            {
                _db.Entry(existedCourse).CurrentValues.SetValues(сourse);
                _db.SaveChanges();
            }
        }

        public void Remove(string id)
        {
            CourseModel сourse = GetValueById(id);
            _db.Entry(сourse).State = EntityState.Deleted;
            _db.SaveChanges();
        }
        
    }
}