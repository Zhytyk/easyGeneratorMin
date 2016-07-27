using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EasyGeneratorMin.Models
{
    public class Entity
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Creater { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime LastUpdatedDate { get; set; }

        public Entity()
        {
            Id = Guid.NewGuid();
            LastUpdatedDate = DateTime.UtcNow;
            CreatedDate = DateTime.UtcNow;
            Creater = "Pavel Vaydalauskas";
        }

        protected void SetLastUpdatedDate()
        {
            LastUpdatedDate = DateTime.UtcNow;
        }

    }
}
