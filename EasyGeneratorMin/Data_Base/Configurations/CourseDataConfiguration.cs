using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{

    public class CourseDataConfiguration : EntityTypeConfiguration<CourseData>
    {
        public CourseDataConfiguration()
        {
            this.ToTable("t_course_data");

            this.HasKey(o => o.Id);

            this.Property(o => o.Title).IsRequired();
            this.Property(o => o.Description).IsRequired();
            this.Property(o => o.Owner).IsRequired();
            this.Property(o => o.LastModifiedDate).IsRequired();
            this.Property(o => o.CreatedDate).IsRequired();

            this.Property(o => o.Title).HasMaxLength(255);
        }
    }
}
