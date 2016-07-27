using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace EasyGeneratorMin.DataAccess
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        private IDatabaseContext _db;
        public Repository(IDatabaseContext db)
        {
            _db = db;
        }

        public virtual IEnumerable<TEntity> GetCollection()
        {
            return _db.GetSet<TEntity>();
        }

        public virtual TEntity GetValueById(Guid id)
        {
            return _db.GetSet<TEntity>().Find(id);
        }

        public void Insert(TEntity Entity)
        { 
            _db.GetSet<TEntity>().Add(Entity);
        }

        public void Update(TEntity Entity)
        {
            var existedEntity = GetValueById(Entity.Id);

            if (existedEntity != null)
                _db.GetEntry(existedEntity).CurrentValues.SetValues(Entity);
        }

        public void Delete(TEntity entity)
        {
            _db.GetSet<TEntity>().Remove(entity);
        }

    }
}