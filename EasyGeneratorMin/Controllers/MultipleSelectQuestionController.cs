using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

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
        public IEnumerable<SingleSelectQuestionModel> GetSingleSelectQuestions()
        {
            var singleSelectQuestions = _multipleSelectQuestionRepository.GetCollection();

            var mapSections = singleSelectQuestions.Select(item => _mapper.Map<SingleSelectQuestionModel>(item)).ToList();

            return mapSections;
        }



    }
}
