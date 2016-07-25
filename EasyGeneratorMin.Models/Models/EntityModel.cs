using System;

namespace EasyGeneratorMin.Models
{
    public class EntityModel
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Creater { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime LastUpdatedDate { get; set; }

    }
}