using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace EasyGeneratorMin.DataAccess
{
    public class CourseDataDbInitializer : DropCreateDatabaseIfModelChanges<CourseDataContext>
    {
        protected override void Seed(CourseDataContext db)
        {
            db.Courses.Add(new CourseModel
            {
                Id = Guid.NewGuid(),
                Title = "TestCourse1",
                Description = "This is Test Course1",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now,
                Sections = new List<SectionModel>()
            });

            db.Courses.Add(new CourseModel
            {
                Id = Guid.NewGuid(),
                Title = "TestCourse2",
                Description = "This is Test Course2",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now,
                Sections = new List<SectionModel>()
            });

            base.Seed(db);
        }
    }
}
