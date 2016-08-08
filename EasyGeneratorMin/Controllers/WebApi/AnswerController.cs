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

        public AnswerController(IRepository<Answer> answerRepository, IMapper mapper) : base(mapper)
        {
            _answerRepository = answerRepository;
        }

        [HttpPost]
        [Route("create/answer")]
        public AnswerModel CreateAnswer([ModelBinder(typeof(EntityModelBinder<SelectQuestion>))]SelectQuestion selectQuestion, Dictionary<string, string> spec)
        {
            if (selectQuestion == null)
                throw new ArgumentNullException();

            var answer = new Answer(spec["title"], selectQuestion);

            _answerRepository.Insert(answer);

            return _mapper.Map<AnswerModel>(answer);
        }

        [HttpPut]
        [Route("update/answer")]
        [ResetSingleAnswersWebApiActionFilter]
        public AnswerModel UpdateAnswer([ModelBinder(typeof(EntityModelBinder<Answer>))]Answer answer, Dictionary<string, string> spec)
        {
            if (answer == null)
                throw new ArgumentNullException();

            answer.Update(spec["title"], spec["isCorrectly"]);

            return _mapper.Map<AnswerModel>(answer);
        }


        [HttpDelete]
        [Route("remove/answer")]
        public void RemoveAnswer([ModelBinder(typeof(EntityModelBinder<Answer>))]Answer answer)
        {
            if (answer == null)
                throw new ArgumentNullException();

            _answerRepository.Delete(answer);

        }

    }
}
