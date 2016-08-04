using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.DataAccess
{
    public class SelectAnswerRepository : Repository<Answer>
    {
        public SelectAnswerRepository(IDatabaseContext db) : base(db) {}

        public override IEnumerable<Answer> GetCollection()
        {
            return _db.GetSet<Answer>()
                .Include(c => c.SelectQuestion)
                .Select(c => c).ToList();
        }
    }
}
