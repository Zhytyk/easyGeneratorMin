using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace EasyGeneratorMin.Web
{
    public class SectionController : ApiController
    {

        private readonly IRepository<Section> _sectionRepository;
        private readonly IMapper _mapper;

        public SectionController(IRepository<Course> courseRepository, IRepository<Section> sectionRepository, IMapper mapper)
        {
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }


        [HttpPost]
        [Route("create/section")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
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
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SectionModel UpdateSection([ModelBinder(typeof(EntityModelBinder<Section>))]Section section, Dictionary<string, string> spec)
        {
            if (section == null)
                throw new ArgumentNullException();

            section.UpdateSection(spec["title"]);

            return _mapper.Map<SectionModel>(section);
        }


        [HttpDelete]
        [Route("remove/section")]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public void RemoveSection([ModelBinder(typeof(EntityModelBinder<Section>))]Section section)
        {
            if (section == null)
                throw new ArgumentNullException();

            _sectionRepository.Delete(section);

        }

    }
}