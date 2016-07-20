using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;

namespace EasyGeneratorMin
{
    public interface IUnitOfWork
    {
        IRepository<TEntity> GetRepository<TEntity>() where TEntity: Entity;
        void Save();
    }
}
