using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface ICourseRepository<TEntity> : IRepository<TEntity> where TEntity : CourseModel
    {
        void InsertSection(Guid id, SectionModel section);
    }
}
