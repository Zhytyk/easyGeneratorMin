using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;


namespace EasyGeneratorMin.DataAccess
{
    public class CourseRepository : Repository<Course>
    {

        public CourseRepository(IDatabaseContext db) : base(db) { }

        public override IEnumerable<Course> GetCollection()
        {
            return _db.GetSet<Course>()
                .Include(c => c.Sections)
                .Select(c => c).ToList();
        }

        public override Course GetValueById(Guid id)
        {
            return _db.GetSet<Course>()
                .Include(c => c.Sections)
                .FirstOrDefault(c => c.Id == id);
        }

    }
}
