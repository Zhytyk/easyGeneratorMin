using System;

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
            LastUpdatedDate = DateTime.Now;
            Creater = "Pavel Vaydalauskas";
        }

        protected void SetLastUpdatedDate()
        {
            LastUpdatedDate = DateTime.Now;
        }

        protected void SetCreatedDate()
        {
            CreatedDate = DateTime.Now;
        }

    }
}