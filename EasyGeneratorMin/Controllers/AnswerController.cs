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
    public class AnswerController : ApiController
    {
        private readonly IRepository<Answer> _answerRepository;
        private readonly IMapper _mapper;

        public AnswerController(IRepository<Answer> answerRepository, IMapper mapper)
        {
            _answerRepository = answerRepository;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("create/answer")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public AnswerModel CreateSelectAnswer([ModelBinder(typeof(EntityModelBinder<SelectQuestion>))]SelectQuestion selectQuestion, Dictionary<string, string> spec)
        {
            if (selectQuestion == null)
                throw new ArgumentNullException();

            selectQuestion.ThrowIfHasOneMoreCorrectAnswers(spec["isCorrectly"]);

            var answer = new Answer(spec["title"], spec["isCorrectly"], selectQuestion);

            _answerRepository.Insert(answer);

            return _mapper.Map<AnswerModel>(answer);
        }

        [HttpPut]
        [Route("update/answer")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public AnswerModel UpdateSection([ModelBinder(typeof(EntityModelBinder<Answer>))]Answer answer, Dictionary<string, string> spec)
        {
            if (answer == null)
                throw new ArgumentNullException();

            answer.Update(spec["title"], spec["isCorrectly"]);

            return _mapper.Map<AnswerModel>(answer);
        }


        [HttpDelete]
        [Route("remove/answer")]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public void RemoveSection([ModelBinder(typeof(EntityModelBinder<Answer>))]Answer answer)
        {
            if (answer == null)
                throw new ArgumentNullException();

            _answerRepository.Delete(answer);

        }

    }
}
