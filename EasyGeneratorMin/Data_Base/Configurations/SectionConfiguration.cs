﻿using System.Data.Entity.ModelConfiguration;

namespace EasyGeneratorMin
{
    public class SectionConfiguration : EntityTypeConfiguration<SectionModel>
    {
        public SectionConfiguration()
        {

            ToTable("t_section_course_data");

            HasKey(o => o.Id);

            Property(o => o.Title).IsRequired();
            Property(o => o.CourseId).IsRequired();
            Property(o => o.Creater).IsRequired();
            Property(o => o.LastModifiedDate).IsRequired();
            Property(o => o.CreatedDate).IsRequired();

            Property(o => o.Title).HasMaxLength(255);

        }
    }
}
