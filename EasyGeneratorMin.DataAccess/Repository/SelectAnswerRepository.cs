using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.DataAccess
{
    public class SelectAnswerRepository : Repository<SelectAnswer>
    {
        public SelectAnswerRepository(IDatabaseContext db) : base(db) {}

        public override IEnumerable<SelectAnswer> GetCollection()
        {
            return _db.GetSet<SelectAnswer>()
                .Include(c => c.SelectQuestion)
                .Select(c => c).ToList();
        }
    }
}
