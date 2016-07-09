using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{
    public class SectionCourseDataConfiguration : EntityTypeConfiguration<SectionCourseData>
    {
        public SectionCourseDataConfiguration()
        {

            this.ToTable("t_section_course_data");

            this.HasKey(o => o.Id);

            this.Property(o => o.SectionTitle).IsRequired();
            this.Property(o => o.CourseId).IsRequired();
            this.Property(o => o.Owner).IsRequired();
            this.Property(o => o.LastModifiedDate).IsRequired();
            this.Property(o => o.CreatedDate).IsRequired();

            this.Property(o => o.SectionTitle).HasMaxLength(255);

        }
    }
}
