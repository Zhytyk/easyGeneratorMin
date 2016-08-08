using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
{
    public class PreviewController : Controller
    {
        private readonly IPreviewRepository _previewRepository;
        private readonly IMapper _mapper;
        public PreviewController(IPreviewRepository previewRepository, IMapper mapper)
        {
            _previewRepository = previewRepository;
            _mapper = mapper;
        }

        [HttpPost]
        [Route("get/previewresult")]
        [NullMvcExceptionFilter]
        public ActionResult GetPreviewResult(IEnumerable<SelectQuestionPreviewModel> questions)
        {
            if (questions == null)
                throw new ArgumentNullException();

            var result = _previewRepository.GetResultCorrectAnswer(questions.Select(item => _mapper.Map<SelectQuestion>(item)));


            return Json("You have " + result.ToString("#.##") + " from " + questions.Count() + " correct answers!",
                   JsonRequestBehavior.AllowGet);
        }
    }
}