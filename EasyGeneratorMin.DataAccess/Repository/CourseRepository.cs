using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;


namespace EasyGeneratorMin.DataAccess
{
    public class CourseRepository<TEntity> : Repository<TEntity>, IRepository<TEntity> where TEntity : Course
    {
        private IDatabaseContext _db;
        public CourseRepository(IDatabaseContext db): base(db)
        {
            _db = db;
        }

        public override IEnumerable<TEntity> GetCollection()
        {
            return _db.GetSet<TEntity>().Include(c => c.Sections).Select(c => c).ToList();
        }

        public override TEntity GetValueById(Guid id)
        {
            return _db.GetSet<TEntity>().Include(c => c.Sections).FirstOrDefault(c => c.Id == id);
        }

    }
}
