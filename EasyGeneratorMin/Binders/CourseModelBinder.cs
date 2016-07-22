using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using Autofac.Integration.Mvc;

namespace EasyGeneratorMin.Web
{

    [ModelBinderType(typeof(CourseModel))]
    public class CourseModelBinder : IModelBinder
    {

        private IRepository<CourseModel> _courseRepository;

        public CourseModelBinder(IRepository<CourseModel> courseRepository)
        {
            _courseRepository = courseRepository;
        }

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {

            var valueProvider = bindingContext.ValueProvider;

            var id = (Guid)valueProvider.GetValue("id").ConvertTo(typeof(Guid));

            return _courseRepository.GetValueById(id);

        }

    }
}