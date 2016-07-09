using System;
using System.Linq;
using System.Data.Entity;

namespace EasyGeneratorMin
{
    public class CourseDataDbInitializer : DropCreateDatabaseIfModelChanges<CourseDataContext>
    {
        protected override void Seed(CourseDataContext db)
        {
            var format = @"MM\/dd\/yyyy HH:mm";

            db.CourseData.Add(new CourseData
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse1",
                Description = "This is Test Course1",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });

            db.CourseData.Add(new CourseData
            {
                Id = Guid.NewGuid().ToString(),
                Title = "TestCourse2",
                Description = "This is Test Course2",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });

            db.SectionCourseData.Add(new SectionCourseData
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                SectionTitle = "First",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });

            db.SectionCourseData.Add(new SectionCourseData
            {
                Id = Guid.NewGuid().ToString(),
                CourseId = "dasdasd",
                SectionTitle = "Second",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });

            db.QuestionSectionData.Add(new QuestionSectionData
            {
                Id = Guid.NewGuid().ToString(),
                SectionId ="dasdas",
                QuestionTitle = "First Question",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });
            db.QuestionSectionData.Add(new QuestionSectionData
            {
                Id = Guid.NewGuid().ToString(),
                SectionId = "assda",
                QuestionTitle = "Second Question",
                Owner = "Pavel Vaydalauskas",
                CreatedDate = DateTime.Now.ToString(format),
                LastModifiedDate = DateTime.Now.ToString(format)
            });

            db.SaveChanges();

            base.Seed(db);
        }
    }
}
