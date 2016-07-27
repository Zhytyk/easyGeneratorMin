using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class SectionController : Controller
    {

        private readonly IUnitOfWork _unitOWork;
        private readonly IRepository<Section> _sectionRepository;
        private readonly IMapper _mapper;

        public SectionController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IRepository<Section> sectionRepository, IMapper mapper)
        {
            _unitOWork = unitOfWork;
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }


        [HttpPost]
        [Route("create/section")]
        [OutOfRangeExceptionFilter]
        [NullExceptionFilter]
        public JsonResult CreateSection(Course course, string title)
        {
            if (course == null)
                throw new ArgumentNullException();

            var section = new Section(title, course);

            _sectionRepository.Insert(section);

            var mapSection = _mapper.Map<SectionModel>(section);

            return Json(mapSection, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/section")]
        [OutOfRangeExceptionFilter]
        public JsonResult UpdateSection(Section section, string title)
        {
            if (section == null)
                throw new ArgumentNullException();

            section.UpdateSection(title);

            var mapSection = _mapper.Map<SectionModel>(section);

            return Json(mapSection, JsonRequestBehavior.DenyGet);
        }


        [HttpPost]
        [Route("remove/section")]
        [NullExceptionFilter]
        public JsonResult RemoveSection(Section section)
        {
            if (section == null)
                throw new ArgumentNullException();

            _sectionRepository.Delete(section);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            _unitOWork.Save();
            base.OnActionExecuted(filterContext);
        }

    }
}