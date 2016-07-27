using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using Autofac.Integration.Mvc;

namespace EasyGeneratorMin.Web
{

    [ModelBinderType(typeof(Course))]
    [ModelBinderType(typeof(Section))]
    public class CourseModelBinder<T> : IModelBinder where T : Entity
    {

        private IRepository<T> _repository;

        public CourseModelBinder(IRepository<T> repository)
        {
            _repository = repository;
        }

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {

            var valueProvider = bindingContext.ValueProvider;

            var id = (Guid)valueProvider.GetValue("id").ConvertTo(typeof(Guid));

            return _repository.GetValueById(id);

        }

    }
}