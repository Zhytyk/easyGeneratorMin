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
    public class SingleSelectQuestionController : MainWebApiController
    {
        private readonly IRepository<SingleSelectQuestion> _singleSelectQuestionRepository;

        public SingleSelectQuestionController(IRepository<SingleSelectQuestion> singleSelectQuestionRepository, IMapper mapper) : base(mapper)
        {
            _singleSelectQuestionRepository = singleSelectQuestionRepository;
        }

        [HttpGet]
        [Route("get/singleselectquestions")]
        public IEnumerable<SingleSelectQuestionModel> GetSelectQuestions()
        {
            var selectQuestions = _singleSelectQuestionRepository.GetCollection();

            return selectQuestions.Select(item => _mapper.Map<SingleSelectQuestionModel>(item)).ToList();
        }



        [HttpPost]
        [Route("create/singleselectquestion")]
        public SingleSelectQuestionModel CreateSingleSelectQuestion([ModelBinder(typeof(EntityModelBinderProvider))]Section section, Dictionary<string, string> spec)
        {
            if (section == null && !spec.ContainsKey("title"))
                throw new ArgumentNullException();

            var singleSelectQuestion = new SingleSelectQuestion(spec["title"], section);

            _singleSelectQuestionRepository.Insert(singleSelectQuestion);

            return _mapper.Map<SingleSelectQuestionModel>(singleSelectQuestion);
        }

    }
}
