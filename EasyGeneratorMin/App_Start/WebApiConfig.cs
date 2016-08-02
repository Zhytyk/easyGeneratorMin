using EasyGeneratorMin.Models;
using System.Web.Http;
using System.Web.Http.Filters;
using System.Web.Http.ModelBinding;
using System.Web.Http.ModelBinding.Binders;

namespace EasyGeneratorMin.Web
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {

            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}