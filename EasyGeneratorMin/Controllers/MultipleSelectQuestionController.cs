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
    public class MultipleSelectQuestionController : ApiController
    {
        private readonly IRepository<MultipleSelectQuestion> _multipleSelectQuestionRepository;
        private readonly IMapper _mapper;

        public MultipleSelectQuestionController(IRepository<MultipleSelectQuestion> multipleSelectQuestionRepository, IMapper mapper)
        {
            _multipleSelectQuestionRepository = multipleSelectQuestionRepository;
            _mapper = mapper;
        }


        [HttpGet]
        [Route("get/multipleselectquestions")]
        public IEnumerable<MultipleSelectQuestionModel> GetSingleSelectQuestions()
        {
            var multipleSelectQuestions = _multipleSelectQuestionRepository.GetCollection();

            return multipleSelectQuestions.Select(item => _mapper.Map<MultipleSelectQuestionModel>(item)).ToList();
        }

        [HttpPost]
        [Route("create/multipleselectquestion")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public MultipleSelectQuestionModel CreateSingleSelectQuestion([ModelBinder(typeof(EntityModelBinder<Section>))]Section section, Dictionary<string, string> spec)
        {
            if (section == null)
                throw new ArgumentNullException();

            var multipleSelectQuestion = new MultipleSelectQuestion(spec["title"], section);

            _multipleSelectQuestionRepository.Insert(multipleSelectQuestion);

            return _mapper.Map<MultipleSelectQuestionModel>(multipleSelectQuestion);
        }

    }
}
