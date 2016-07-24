using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public class CourseRepository<TEntity> : Repository<TEntity>, ICourseRepository<TEntity> where TEntity : CourseModel
    {
        private readonly IDatabaseContext _db;

        public CourseRepository(IDatabaseContext db) : base(db)
        {
            _db = db;
        }


        public void InsertSection(Guid id, SectionModel section)
        {
            CourseModel course = GetValueById(id);

            course.Sections.Add(section);
        }
    }
}
