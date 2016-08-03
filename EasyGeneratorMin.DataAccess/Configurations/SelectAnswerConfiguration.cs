using EasyGeneratorMin.Models;
using System.Data.Entity.ModelConfiguration;


namespace EasyGeneratorMin.DataAccess
{
    public class SelectAnswerConfiguration : EntityTypeConfiguration<SelectAnswer>
    {
        public SelectAnswerConfiguration()
        {
            ToTable("t_select_answer_data");

            HasKey(o => o.Id);

            Property(o => o.IsCorrectly).IsRequired();
            Property(o => o.Title).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastUpdatedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);
        }
    }
}
