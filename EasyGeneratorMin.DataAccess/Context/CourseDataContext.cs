using EasyGeneratorMin.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace EasyGeneratorMin.DataAccess
{
    public class CourseDataContext : DbContext, IDatabaseContext, IUnitOfWork
    {
        public DbSet<Course> Courses { get; set; }

        public DbSet<Section> Sections { get; set; } 

        public DbSet<SelectQuestion> SelectQuestion { get; set; }

        public DbSet<SingleSelectQuestion> SingleSelectQuestion { get; set; }

        public DbSet<MultipleSelectQuestion> MultipleSelectQuestion { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new CourseConfiguration());
            modelBuilder.Configurations.Add(new SectionConfiguration());
            modelBuilder.Configurations.Add(new SelectQuestionConfiguration());
        }

        public IDbSet<TEntity> GetSet<TEntity>() where TEntity : Entity
        {
            return Set<TEntity>();
        }

        public DbEntityEntry<TEntity> GetEntry<TEntity>(TEntity Entity) where TEntity : Entity
        {
            return Entry(Entity);
        }
        
        public void Save()
        {
            SaveChanges();
        }
    }
}