using System;

namespace EasyGeneratorMin.Models
{
    public class Entity
    {
        public string Id { get; set; }

        public string Title { get; set; }

        public string Creater { get; set; }

        public string CreatedDate { get; set; }

        public string LastUpdatedDate { get; set; }

        public Entity()
        {
            Id = Guid.NewGuid().ToString();
            LastUpdatedDate = DateTime.Now.ToString();
            Creater = "Pavel Vaydalauskas";
        }

        protected void SetLastUpdatedDate()
        {
            LastUpdatedDate = DateTime.Now.ToString();
        }

        protected void SetCreatedDate()
        {
            CreatedDate = DateTime.Now.ToString();
        }

    }
}