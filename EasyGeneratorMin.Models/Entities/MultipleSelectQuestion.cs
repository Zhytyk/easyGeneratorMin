using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class MultipleSelectQuestion : SelectQuestion
    {
        public MultipleSelectQuestion() { }

        public MultipleSelectQuestion(string title, Section section) : base(title, section) { }
    }
}
