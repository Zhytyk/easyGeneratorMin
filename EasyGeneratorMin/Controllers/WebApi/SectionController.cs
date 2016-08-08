using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace EasyGeneratorMin.Web
{
    public class SectionController : MainWebApiController
    {
        private readonly IRepository<Section> _sectionRepository;

        public SectionController(IRepository<Section> sectionRepository, IMapper mapper) : base(mapper)
        {
            _sectionRepository = sectionRepository;
        }

        [HttpPost]
        [Route("create/section")]
        public SectionModel CreateSection([ModelBinder(typeof(EntityModelBinder<Course>))]Course course, Dictionary<string,string> spec)
        {
            if (course == null)
                throw new ArgumentNullException();

            var section = new Section(spec["title"], course);

            _sectionRepository.Insert(section);

            return  _mapper.Map<SectionModel>(section);
        }

        [HttpPut]
        [Route("update/section")]
        public SectionModel UpdateSection([ModelBinder(typeof(EntityModelBinder<Section>))]Section section, Dictionary<string, string> spec)
        {
            if (section == null)
                throw new ArgumentNullException();

            section.Update(spec["title"]);

            return _mapper.Map<SectionModel>(section);
        }

        [HttpDelete]
        [Route("remove/section")]
        public void RemoveSection([ModelBinder(typeof(EntityModelBinder<Section>))]Section section)
        {
            if (section == null)
                throw new ArgumentNullException();

            _sectionRepository.Delete(section);

        }

    }
}