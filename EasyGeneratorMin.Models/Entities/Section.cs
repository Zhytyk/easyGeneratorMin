using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class Section : Entity
    {

        public Course Course { get; set; }

        public void UpdateSection(string title)
        {
            Title = title;

            SetLastUpdatedDate();
        }

    }
}
