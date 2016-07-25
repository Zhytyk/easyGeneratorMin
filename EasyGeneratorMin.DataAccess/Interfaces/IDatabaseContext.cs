using EasyGeneratorMin.Models;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

namespace EasyGeneratorMin
{
    public interface IDatabaseContext
    {
        IDbSet<TEntity> GetSet<TEntity>() where TEntity : Entity;

        DbEntityEntry<TEntity> GetEntry<TEntity>(TEntity Entity) where TEntity : Entity;
    }
}
