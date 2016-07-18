using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Validation;
using System.Linq;
using System.Web;
using System.Web.ModelBinding;

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

        public void Insert(CourseModel course)
        { 
            _db.Courses.Add(course);
        }

        public void Update(CourseModel сourse)
        {
            var existedCourse = GetValueById(сourse.Id);

            if (existedCourse != null)
                _db.Entry(existedCourse).CurrentValues.SetValues(сourse);
        }

        public void Delete(string id)
        {
            CourseModel сourse = GetValueById(id);
            _db.Entry(сourse).State = EntityState.Deleted;
        }

        public void Save()
        {
            _db.SaveChanges();
        }
        
    }
}