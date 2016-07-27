using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EasyGeneratorMin.DataAccess
{
    public interface IRepository<TEntity> where TEntity : Entity
    {

        IEnumerable<TEntity> GetCollection();

        TEntity GetValueById(Guid id);

        void Insert(TEntity course);

        void Update(TEntity course);

        void Delete(TEntity id);
    }
}
