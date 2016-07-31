using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.ModelBinding;
using System.Web.Http.ModelBinding.Binders;
using System.Web.Http.ValueProviders;

namespace EasyGeneratorMin.Web
{
    public class EntityModelBinder<T> : IModelBinder where T : Entity
    {

        public bool BindModel(HttpActionContext actionContext, ModelBindingContext bindingContext)
        {
            var _repository = actionContext.Request.GetDependencyScope().GetService(typeof(IRepository<T>)) as IRepository<T>;


            var requestContent = actionContext.Request.Content.ReadAsStringAsync().Result;

            var uriFromId = requestContent.Substring(requestContent.IndexOf("id"));

            string id = WebUtility.UrlDecode(requestContent.Substring(uriFromId.IndexOf('=') + 1)).Substring(0, 36);

            Guid guidId;
            if (!Guid.TryParse(id, out guidId))
            {
                JsonConvert.DeserializeObject<Dictionary<string, string>>(requestContent).TryGetValue("id", out id);
                guidId = Guid.Parse(id);
            }

            if (guidId != null)
            {
                var model = _repository.GetValueById(guidId);
                bindingContext.Model = model;
                return true;
            }

            return false;  
        }

    }
}