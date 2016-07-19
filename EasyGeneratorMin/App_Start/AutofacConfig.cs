using Autofac;
using Autofac.Integration.Mvc;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {

            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<CourseRepository>().As<IRepository<CourseModel>>().WithParameter("db", new CourseDataContext());

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }
    }
}