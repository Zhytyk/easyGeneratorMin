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

        [HttpPost]
        [Route("create/multipleselectquestion")]
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
