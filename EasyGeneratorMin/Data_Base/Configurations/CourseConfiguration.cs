using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{

    public class CourseConfiguration : EntityTypeConfiguration<CourseModel>
    {
        public CourseConfiguration()
        {
            ToTable("t_course_data");

            HasKey(o => o.Id);

            //Property(o => o.Title).IsRequired();
            //Property(o => o.Description).IsRequired();
            //Property(o => o.Creater).IsRequired();
            //Property(o => o.LastUpdatedDate).IsRequired();
            //Property(o => o.CreatedDate).IsRequired();

            //Property(o => o.Title).HasMaxLength(255);
        }
    }
}
