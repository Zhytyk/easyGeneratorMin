using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.DataAccess
{
    public interface IPreviewRepository
    {
        float GetResultCorrectAnswer(IEnumerable<SelectQuestion> questions);
    }
}
