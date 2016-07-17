using System;
using System.Linq;
using System.Data.Entity;

namespace EasyGeneratorMin
{
    public class CourseDataDbInitializer : DropCreateDatabaseIfModelChanges<CourseDataContext>
    {
        protected override void Seed(CourseDataContext db)
        {

            db.Courses.Add(new CourseModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse1",
                Description = "This is Test Course1",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });

            db.Courses.Add(new CourseModel
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse2",
                Description = "This is Test Course2",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });

            db.Sections.Add(new SectionModel
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                Title = "First",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });

            db.Sections.Add(new SectionModel
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                Title = "Second",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });

            db.Questions.Add(new QuestionModel
            {
                Id = Guid.NewGuid().ToString(),
                SectionId ="dasdas",
                Title = "First Question",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });
            db.Questions.Add(new QuestionModel
            {
                Id = Guid.NewGuid().ToString(),
                SectionId = "assda",
                Title = "Second Question",
                Creater = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(),
                LastUpdatedDate = DateTime.Now.ToString()
            });

            base.Seed(db);
        }
    }
}
