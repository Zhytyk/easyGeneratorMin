using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;

namespace EasyGeneratorMin.DataAccess
{
    public class Repository<TEntity> : IRepository<TEntity> where TEntity : Entity
    {
        private IDatabaseContext _db;
        public Repository(IDatabaseContext db)
        {
            _db = db;
        }

        public IEnumerable<TEntity> GetCollection()
        {
            return _db.GetSet<TEntity>();
        }

        public TEntity GetValueById(Guid id)
        {
            return _db.GetSet<TEntity>().Find(id);
        }

        public void Insert(TEntity entity)
        { 
            _db.GetSet<TEntity>().Add(entity);
        }

        public void Update(TEntity entity)
        {
            var existedCourse = GetValueById(entity.Id);

            if (existedCourse != null)
                _db.GetEntry(existedCourse).CurrentValues.SetValues(entity);
        }

        public void Delete(Guid id)
        {
            TEntity entity = GetValueById(id);
            _db.GetEntry(entity).State = EntityState.Deleted;
        }

    }
}