using EasyGeneratorMin.Models;
using System;
using System.Web.Http;
using System.Web.Http.ModelBinding;

namespace EasyGeneratorMin.Web
{
    public class EntityModelBinderProvider : ModelBinderProvider
    {
        public override IModelBinder GetBinder(HttpConfiguration configuration, Type modelType)
        {

            if (!typeof(Entity).IsAssignableFrom(modelType))
                return null;

            Type modelBinderType = typeof(EntityModelBinder<>)
                .MakeGenericType(modelType);

            var modelBinder = Activator.CreateInstance(modelBinderType);

            return (IModelBinder)modelBinder;

        }
    }
}