using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface IRepository<TModel> where TModel : class
    {

        IEnumerable<TModel> GetCollection();

        void Create(TModel Course);

        void Update(TModel Course);

        void Remove(string id);

    }
}
