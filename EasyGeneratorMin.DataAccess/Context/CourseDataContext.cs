using EasyGeneratorMin.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace EasyGeneratorMin.DataAccess
{
    public class CourseDataContext : DbContext, IDatabaseContext, IUnitOfWork
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

        public IDbSet<TEntity> GetSet<TEntity>() where TEntity : Entity
        {
            return Set<TEntity>();
        }

        public DbEntityEntry<TEntity> GetEntry<TEntity>(TEntity entity) where TEntity : Entity
        {
            return Entry(entity);
        }
        
        public void Save()
        {
            SaveChanges();
        }
    }
}