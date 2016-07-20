using EasyGeneratorMin.Models;
using System.Collections.Generic;

namespace EasyGeneratorMin.DataAccess
{
    public interface IRepository<TEntity> where TEntity : Entity
    {

        IEnumerable<TEntity> GetCollection();

        TEntity GetValueById(string id);

        void Insert(TEntity course);

        void Update(TEntity course);

        void Delete(string id);
    }
}
