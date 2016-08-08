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

      

        [HttpPost]
        [Route("create/singleselectquestion")]
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
