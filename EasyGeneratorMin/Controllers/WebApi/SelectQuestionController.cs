﻿using AutoMapper;
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
    public class SelectQuestionController : MainWebApiController
    {
        private readonly IRepository<SelectQuestion> _selectQuestionRepository;

        public SelectQuestionController(IRepository<SelectQuestion> selectQuestionRepository, IMapper mapper) : base(mapper)
        {
            _selectQuestionRepository = selectQuestionRepository;
        }

        [HttpPut]
        [Route("update/selectquestion")]
        public SelectQuestionModel UpdateSelectQuestion([ModelBinder(typeof(EntityModelBinderProvider))]SelectQuestion selectQuestion, Dictionary<string, string> spec)
        {
            if (selectQuestion == null && !spec.ContainsKey("title"))
                throw new ArgumentNullException();

            selectQuestion.Update(spec["title"]);

            return _mapper.Map<SelectQuestionModel>(selectQuestion);
        }

        [HttpDelete]
        [Route("remove/selectquestion")]
        public void RemoveSelectQuestion([ModelBinder(typeof(EntityModelBinderProvider))]SelectQuestion selectQuestion)
        {
            if (selectQuestion == null)
                throw new ArgumentNullException();

            _selectQuestionRepository.Delete(selectQuestion);
        }
    }
}
