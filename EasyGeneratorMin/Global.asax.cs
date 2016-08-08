using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using EasyGeneratorMin.Web;
using System.Data.Entity;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace EasyGeneratorMin.Web
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperConfig.RegisterMappings();
            AutofacConfigMvc.ConfigureContainer();
            AutofacConfigWebApi.ConfigureContainer();

            AreaRegistration.RegisterAllAreas();

            GlobalConfiguration.Configure(WebApiConfig.Register);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Database.SetInitializer(new CourseDataDbInitializer());
        }
    }
}
