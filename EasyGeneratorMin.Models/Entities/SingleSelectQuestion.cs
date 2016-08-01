using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class SingleSelectQuestion : SelectQuestion
    {
        
        public SingleSelectQuestion() { }

        public SingleSelectQuestion(string title, Section section) : base(title, section) { }

    }
}
