using System;
using System.Linq;
using System.Data.Entity;

namespace EasyGeneratorMin
{
    public class CourseDataDbInitializer : DropCreateDatabaseIfModelChanges<CourseDataContext>
    {
        protected override void Seed(CourseDataContext db)
        {

            db.CourseData.Add(new CourseData
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse1",
                Description = "This is Test Course1",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });

            db.CourseData.Add(new CourseData
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse2",
                Description = "This is Test Course2",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });

            db.SectionCourseData.Add(new SectionCourseData
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                SectionTitle = "First",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });

            db.SectionCourseData.Add(new SectionCourseData
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                SectionTitle = "Second",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });

            db.QuestionSectionData.Add(new QuestionSectionData
            {
                Id = Guid.NewGuid().ToString(),
                SectionId ="dasdas",
                QuestionTitle = "First Question",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });
            db.QuestionSectionData.Add(new QuestionSectionData
            {
                Id = Guid.NewGuid().ToString(),
                SectionId = "assda",
                QuestionTitle = "Second Question",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now,
                LastModifiedDate = DateTime.Now
            });

            db.SaveChanges();

            base.Seed(db);
        }
    }
}
