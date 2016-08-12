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
    public class MultipleSelectQuestionController : MainWebApiController
    {
        private readonly IRepository<MultipleSelectQuestion> _multipleSelectQuestionRepository;

        public MultipleSelectQuestionController(IRepository<MultipleSelectQuestion> multipleSelectQuestionRepository, IMapper mapper) : base(mapper)
        {
            _multipleSelectQuestionRepository = multipleSelectQuestionRepository;
        }

        [HttpGet]
        [Route("get/multipleselectquestions")]
        public IEnumerable<SelectQuestionModel> GetSelectQuestions()
        {
            var selectQuestions = _multipleSelectQuestionRepository.GetCollection();

            return selectQuestions.Select(item => _mapper.Map<MultipleSelectQuestionModel>(item)).ToList();
        }

        [HttpPost]
        [Route("create/multipleselectquestion")]
        public MultipleSelectQuestionModel CreateSingleSelectQuestion([ModelBinder(typeof(EntityModelBinderProvider))]Section section, Dictionary<string, string> spec)
        {
            if (section == null && !spec.ContainsKey("title"))
                throw new ArgumentNullException();

            var multipleSelectQuestion = new MultipleSelectQuestion(spec["title"], section);

            _multipleSelectQuestionRepository.Insert(multipleSelectQuestion);

            return _mapper.Map<MultipleSelectQuestionModel>(multipleSelectQuestion);
        }

    }
}
