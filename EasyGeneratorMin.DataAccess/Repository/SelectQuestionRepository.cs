using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.DataAccess
{
    public class SelectQuestionRepository<TEntity> : Repository<TEntity> where TEntity : SelectQuestion
    {
        public SelectQuestionRepository(IDatabaseContext db) : base(db) { }

        public override IEnumerable<TEntity> GetCollection()
        {
            return _db.GetSet<TEntity>()
                .Include(c => c.Section)
                .Select(c => c).ToList();
        }
    }
}
