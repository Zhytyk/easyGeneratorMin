﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class SingleSelectQuestion : SelectQuestion
    {
        
        public SingleSelectQuestion() { }

        public SingleSelectQuestion(string title, Section section)
        {
            ThrowIfTitleInvalid(title);

            Title = title;
            Section = section;
        }

        private void ThrowIfTitleInvalid(string title)
        {
            if(title.Length < 1 || title.Length > 255)
                throw new ArgumentOutOfRangeException();
        }
    }
}