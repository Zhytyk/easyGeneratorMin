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

        public void Insert(TEntity course)
        { 
            _db.GetSet<TEntity>().Add(course);
        }

        public void Update(TEntity сourse)
        {
            var existedCourse = GetValueById(сourse.Id);

            if (existedCourse != null)
                _db.GetEntry(existedCourse).CurrentValues.SetValues(сourse);
        }

        public void Delete(Guid id)
        {
            TEntity сourse = GetValueById(id);
            _db.GetEntry(сourse).State = EntityState.Deleted;
        }

    }
}