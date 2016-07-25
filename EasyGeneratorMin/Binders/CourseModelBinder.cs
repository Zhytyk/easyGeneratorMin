using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using Autofac.Integration.Mvc;

namespace EasyGeneratorMin.Web
{

    [ModelBinderType(typeof(Course))]
    public class CourseModelBinder : IModelBinder
    {

        private IRepository<Course> _courseRepository;

        public CourseModelBinder(IRepository<Course> courseRepository)
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