using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;

namespace EasyGeneratorMin.Web
{
    public class CourseModelBinder : IModelBinder
    {
        private readonly IRepository<CourseModel> _courseRepository = new Repository<CourseModel>(new CourseDataContext());

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {

            var valueProvider = bindingContext.ValueProvider;

            var id = (Guid)valueProvider.GetValue("id").ConvertTo(typeof(Guid));

            return _courseRepository.GetValueById(id);

        }

    }
}