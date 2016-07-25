﻿using EasyGeneratorMin.Models;
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

        public void Insert(TEntity Entity)
        { 
            _db.GetSet<TEntity>().Add(Entity);
        }

        public void Update(TEntity Entity)
        {
            var existedCourse = GetValueById(Entity.Id);

            if (existedCourse != null)
                _db.GetEntry(existedCourse).CurrentValues.SetValues(Entity);
        }

        public void Delete(Guid id)
        {
            TEntity Entity = GetValueById(id);
            _db.GetEntry(Entity).State = EntityState.Deleted;
        }

    }
}