using EasyGeneratorMin.Models;
using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin.DataAccess
{

    public class CourseConfiguration : EntityTypeConfiguration<Course>
    {
        public CourseConfiguration()
        {
            
            ToTable("t_course_data");

            HasKey(o => o.Id);

            HasMany(c => c.Sections)
                .WithOptional(c => c.Course);

            Property(o => o.Title).IsRequired();
            Property(o => o.Description).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastUpdatedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);

        }
    }
}
