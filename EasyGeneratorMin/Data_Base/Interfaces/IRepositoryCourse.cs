using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface IRepositoryCourse
    {

        IEnumerable<CourseData> GetCourses();

        void AddCourse(CourseData Course);

        void ModifyCourse(CourseData Course);

        void RemoveCourse(string id);

    }
}
