using EasyGeneratorMin.Models;
using System.Collections.Generic;

namespace EasyGeneratorMin.DataAccess
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
