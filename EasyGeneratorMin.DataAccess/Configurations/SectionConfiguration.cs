using EasyGeneratorMin.Models;
using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin.DataAccess
{
    public class SectionConfiguration : EntityTypeConfiguration<Section>
    {
        public SectionConfiguration()
        {

            ToTable("t_section_data");

            HasKey(o => o.Id);

            HasOptional(c => c.Course)
                .WithMany(c => c.Sections);

            HasMany(c => c.SelectQuestions)
                .WithOptional(c => c.Section)
                .WillCascadeOnDelete(true);

            Property(o => o.Title).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastUpdatedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);

        }
    }
}
