using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin
{
    public interface IRepositorySection
    {

        IEnumerable<SectionCourseData> GetSections();

        void AddSection(SectionCourseData Section);

        void RemoveSection(SectionCourseData Section);

        void ModifySection(SectionCourseData Section);

        CourseData GetCourseBySection();

    }
}
