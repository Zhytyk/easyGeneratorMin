using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{
    public class QuestionConfiguration : EntityTypeConfiguration<QuestionModel>
    {
        public QuestionConfiguration()
        {
            ToTable("t_question_section_data");

            HasKey(o => o.Id);

            Property(o => o.Title).IsRequired();
            Property(o => o.SectionId).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastModifiedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);
        }

    }
}
