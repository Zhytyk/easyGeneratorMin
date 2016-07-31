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
    public class SingleSelectQuestionController : ApiController
    {
        private readonly IRepository<SingleSelectQuestion> _singleSelectQuestionRepository;
        private readonly IMapper _mapper;

        public SingleSelectQuestionController(IRepository<SingleSelectQuestion> singleSelectQuestionRepository, IMapper mapper)
        {
            _singleSelectQuestionRepository = singleSelectQuestionRepository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("get/singleselectquestions")]
        public IEnumerable<SingleSelectQuestionModel> GetSingleSelectQuestions()
        {
            var singleSelectQuestions = _singleSelectQuestionRepository.GetCollection();

            var mapSections = singleSelectQuestions.Select(item => _mapper.Map<SingleSelectQuestionModel>(item)).ToList();

            return mapSections;
        }

    }
}
