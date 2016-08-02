using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace EasyGeneratorMin.Web
{
    public class SingleSelectQuestionController : ApiController
    {
        private readonly IRepository<SingleSelectQuestion> _singleSelectQuestionRepository;
        private readonly IMapper _mapper;

        public SingleSelectQuestionController(IRepository<SingleSelectQuestion> singleSelectQuestionRepository, IMapper mapper)
        {
            _singleSelectQuestionRepository = singleSelectQuestionRepository;
            _mapper = mapper;
        }

      

        [HttpPost]
        [Route("create/singleselectquestion")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SingleSelectQuestionModel CreateSingleSelectQuestion([ModelBinder(typeof(EntityModelBinder<Section>))]Section section, Dictionary<string, string> spec)
        {
            if (section == null)
                throw new ArgumentNullException();

            var singleSelectQuestion = new SingleSelectQuestion(spec["title"], section);

            _singleSelectQuestionRepository.Insert(singleSelectQuestion);

            return _mapper.Map<SingleSelectQuestionModel>(singleSelectQuestion);
        }

    }
}
