using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface IRepository<TModel> where TModel : EducationModel
    {

        IEnumerable<TModel> GetCollection();

        TModel GetValueById(string id);

        void Insert(TModel course);

        void Update(TModel course);

        void Delete(string id);

        void Save();

    }
}
