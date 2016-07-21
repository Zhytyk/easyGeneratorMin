using EasyGeneratorMin.Models;
using System;
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
                LastUpdatedDate = DateTime.Now
            });

            db.Courses.Add(new CourseModel
            {
                Id = Guid.NewGuid(),
                Title = "TestCourse2",
                Description = "This is Test Course2",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now
            });

            db.Sections.Add(new SectionModel
            {
                Id = Guid.NewGuid(),
                CourseId = "dasdasd",
                Title = "First",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now
            });

            db.Sections.Add(new SectionModel
            {
                Id = Guid.NewGuid(),
                CourseId = "dasdasd",
                Title = "Second",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now
            });

            db.Questions.Add(new QuestionModel
            {
                Id = Guid.NewGuid(),
                SectionId ="dasdas",
                Title = "First Question",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now
            });
            db.Questions.Add(new QuestionModel
            {
                Id = Guid.NewGuid(),
                SectionId = "assda",
                Title = "Second Question",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastUpdatedDate = DateTime.Now
            });

            base.Seed(db);
        }
    }
}
