using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using EasyGeneratorMin.Web;
using System.Data.Entity;
using System.Web;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace EasyGeneratorMin.Web
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {

            ModelBinders.Binders.Add(typeof(Course), new EntityModelBinder<Course>());
            ModelBinders.Binders.Add(typeof(Section), new EntityModelBinder<Section>());

            AutoMapperConfig.RegisterMappings();
            AutofacConfig.ConfigureContainer();

            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            Database.SetInitializer(new CourseDataDbInitializer());
            

            AreaRegistration.RegisterAllAreas();
        }
    }
}
