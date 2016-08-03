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
    public class SelectAnswerController : ApiController
    {
        private readonly IRepository<SelectAnswer> _selectAnswerRepository;
        private readonly IMapper _mapper;

        public SelectAnswerController(IRepository<SelectAnswer> selectAnswerRepository, IMapper mapper)
        {
            _selectAnswerRepository = selectAnswerRepository;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("create/selectanswer")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SelectAnswerModel CreateSelectAnswer([ModelBinder(typeof(EntityModelBinder<SelectQuestion>))]SelectQuestion selectQuestion, Dictionary<string, string> spec)
        {
            if (selectQuestion == null)
                throw new ArgumentNullException();

            var selectAnswer = new SelectAnswer(spec["title"], selectQuestion);

            _selectAnswerRepository.Insert(selectAnswer);

            return _mapper.Map<SelectAnswerModel>(selectAnswer);
        }

        [HttpPut]
        [Route("update/selectanswer")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public SelectAnswerModel UpdateSection([ModelBinder(typeof(EntityModelBinder<SelectAnswer>))]SelectAnswer selectAnswer, Dictionary<string, string> spec)
        {
            if (selectAnswer == null)
                throw new ArgumentNullException();

            selectAnswer.Update(spec["title"], spec["isCorrectly"]);

            return _mapper.Map<SelectAnswerModel>(selectAnswer);
        }


        [HttpDelete]
        [Route("remove/selectanswer")]
        [NullExceptionFilter]
        [SaveUnitOfWorkActionFilter]
        public void RemoveSection([ModelBinder(typeof(EntityModelBinder<SelectAnswer>))]SelectAnswer selectAnswer)
        {
            if (selectAnswer == null)
                throw new ArgumentNullException();

            _selectAnswerRepository.Delete(selectAnswer);

        }

    }
}
