﻿using EasyGeneratorMin.Models;
using System.Data.Entity;

namespace EasyGeneratorMin.DataAccess
{
    public class CourseDataContext : DbContext
    {

        public DbSet<CourseModel> Courses { get; set; }

        public DbSet<SectionModel> Sections { get; set; }

        public DbSet<QuestionModel> Questions { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CourseConfiguration());
            modelBuilder.Configurations.Add(new SectionConfiguration());
            modelBuilder.Configurations.Add(new QuestionConfiguration());
        }
    }
}