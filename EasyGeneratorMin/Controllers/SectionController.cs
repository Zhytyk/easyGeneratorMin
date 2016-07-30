using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace EasyGeneratorMin.Web
{
    public class SectionController : ApiController
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<Section> _sectionRepository;
        private readonly IMapper _mapper;

        public SectionController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IRepository<Section> sectionRepository, IMapper mapper)
        {
            _unitOWork = unitOfWork;
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }


        [HttpPost]
        [Route("create/section")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SectionModel CreateSection([ModelBinder(typeof(EntityModelBinder<Course>))]Course course, SectionModel sectionModel)
        {
            if (course == null)
                throw new ArgumentNullException();

            var section = new Section(sectionModel.Title, course);

            _sectionRepository.Insert(section);

            var mapSection = _mapper.Map<SectionModel>(section);

            return mapSection;
        }

        [HttpPut]
        [Route("update/section")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SectionModel UpdateSection([ModelBinder(typeof(EntityModelBinder<Section>))]Section section, SectionModel sectionModel)
        {
            if (section == null)
                throw new ArgumentNullException();

            section.UpdateSection(sectionModel.Title);

            var mapSection = _mapper.Map<SectionModel>(section);

            return mapSection;
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