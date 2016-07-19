using System;
using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;

namespace EasyGeneratorMin.Web
{
    public class CourseModelBinder : IModelBinder
    {
        private readonly IRepository<CourseModel> _courseRepository = new CourseRepository(new CourseDataContext());

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {

            var valueProvider = bindingContext.ValueProvider;

            var id = (string)valueProvider.GetValue("id").ConvertTo(typeof(string));

            return _courseRepository.GetValueById(id);

        }

    }
}