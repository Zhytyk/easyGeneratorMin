using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{
    public class QuestionSectionDataConfiguration : EntityTypeConfiguration<QuestionSectionData>
    {
        public QuestionSectionDataConfiguration()
        {
            this.ToTable("t_question_section_data");

            this.HasKey(o => o.Id);

            this.Property(o => o.QuestionTitle).IsRequired();
            this.Property(o => o.SectionId).IsRequired();
            this.Property(o => o.Owner).IsRequired();
            this.Property(o => o.LastModifiedDate).IsRequired();
            this.Property(o => o.CreatedDate).IsRequired();

            this.Property(o => o.QuestionTitle).HasMaxLength(255);
        }

    }
}
