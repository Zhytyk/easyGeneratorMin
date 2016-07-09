using System.Data.Entity;
using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{
    public class CourseDataContext : DbContext
    {

        public DbSet<CourseData> CourseData { get; set; }

        public DbSet<SectionCourseData> SectionCourseData { get; set; }

        public DbSet<QuestionSectionData> QuestionSectionData { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CourseDataConfiguration());
            modelBuilder.Configurations.Add(new SectionCourseDataConfiguration());
            modelBuilder.Configurations.Add(new QuestionSectionDataConfiguration());
        }
    }
}