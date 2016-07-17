using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface ICourseRepository<TModel> : IRepository<TModel> where TModel : EducationModel
    {

        TModel GetUpdatedCourse(string id, string title, string description);

    }
}
