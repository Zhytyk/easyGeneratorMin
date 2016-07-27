using System.Web.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using Autofac.Integration.Mvc;

namespace EasyGeneratorMin.Web
{
    public class EntityModelBinder<T> : IModelBinder where T : Entity
    {

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {

            var _repository = DependencyResolver.Current.GetService<IRepository<T>>();

            var valueProvider = bindingContext.ValueProvider;

            var id = (Guid)valueProvider.GetValue("id").ConvertTo(typeof(Guid));

            return _repository.GetValueById(id);

        }

    }
}