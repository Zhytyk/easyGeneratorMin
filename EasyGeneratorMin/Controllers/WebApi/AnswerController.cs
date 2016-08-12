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

namespace EasyGeneratorMin.Web.Controllers
{
    public class AnswerController : MainWebApiController
    {
        private readonly IRepository<Answer> _answerRepository;
        private readonly IRepository<SingleSelectQuestion> _singleSelectQuestion;

        public AnswerController(IRepository<Answer> answerRepository, IRepository<SingleSelectQuestion> singleSelectQuestion, IMapper mapper) : base(mapper)
        {
            _answerRepository = answerRepository;
            _singleSelectQuestion = singleSelectQuestion;
        }

        [HttpPost]
        [Route("create/answer")]
        public AnswerModel CreateAnswer([ModelBinder(typeof(EntityModelBinderProvider))]SelectQuestion selectQuestion, Dictionary<string, string> spec)
        {
            if (selectQuestion == null && !spec.ContainsKey("title"))
                throw new ArgumentNullException();

            var answer = new Answer(spec["title"], selectQuestion);

            _answerRepository.Insert(answer);

            return _mapper.Map<AnswerModel>(answer);
        }

        [HttpPut]
        [Route("update/answer")]
        public AnswerModel UpdateAnswer([ModelBinder(typeof(EntityModelBinderProvider))]Answer answer, Dictionary<string, string> spec)
        {
            if (answer == null && !spec.ContainsKey("title") && !spec.ContainsKey("isCorrectly"))
                throw new ArgumentNullException();

            var question = _singleSelectQuestion.GetValueById(answer.SelectQuestion.Id);

            if (question != null)
                question.ResetIfAnswerIsSingle(spec["isCorrectly"]);

            answer.Update(spec["title"], spec["isCorrectly"]);

            return _mapper.Map<AnswerModel>(answer);
        }


        [HttpDelete]
        [Route("remove/answer")]
        public void RemoveAnswer([ModelBinder(typeof(EntityModelBinderProvider))]Answer answer)
        {
            if (answer == null)
                throw new ArgumentNullException();

            _answerRepository.Delete(answer);

        }

    }
}
