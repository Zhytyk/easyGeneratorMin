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
        private readonly IRepository<Course> _courseRepository;
        private readonly IRepository<Section> _sectionRepository;
        private readonly IMapper _mapper;

        public SectionController(IUnitOfWork unitOfWork, IRepository<Course> courseRepository, IRepository<Section> sectionRepository, IMapper mapper)
        {
            _unitOWork = unitOfWork;
            _courseRepository = courseRepository;
            _sectionRepository = sectionRepository;
            _mapper = mapper;
        }


        [HttpPost]
        [Route("create/section")]
        [OutOfRangeException]
        public JsonResult CreateSection(Guid courseId, string title)
        {
            var section = new Section
            {
                Title = title,
                CreatedDate = DateTime.Now,
                Course = _courseRepository.GetValueById(courseId),
            };

            _sectionRepository.Insert(section);

            var mapSection = _mapper.Map<SectionModel>(section);

            return Json(mapSection, JsonRequestBehavior.DenyGet);
        }

        [HttpPost]
        [Route("update/section")]
        [OutOfRangeException]
        public JsonResult UpdateSection(Guid id, string title)
        {
            var section = _sectionRepository.GetValueById(id);

            section.UpdateSection(title);

            _sectionRepository.Update(section);

            var mapSection = _mapper.Map<SectionModel>(section);

            return Json(mapSection, JsonRequestBehavior.DenyGet);
        }




        [HttpPost]
        [Route("remove/section")]
        public JsonResult RemoveSection(Guid id)
        {
            _sectionRepository.Delete(id);

            return Json(new { success = true }, JsonRequestBehavior.DenyGet);
        }

        protected override void OnActionExecuted(ActionExecutedContext filterContext)
        {
            _unitOWork.Save();
            base.OnActionExecuted(filterContext);
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            var sections = _sectionRepository.GetCollection();

            foreach (var section in sections) { }

            base.OnActionExecuting(filterContext);
        }

    }
}