﻿using EasyGeneratorMin.Models;
using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin.DataAccess
{
    public class SelectQuestionConfiguration : EntityTypeConfiguration<SingleSelectQuestion>
    {
        public SelectQuestionConfiguration()
        {
            ToTable("t_select_question_data");

            HasKey(o => o.Id);

            HasOptional(c => c.Section)
                .WithMany(c => c.SelectQuestions);

            Property(o => o.Title).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastUpdatedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);
        }
    }
}
