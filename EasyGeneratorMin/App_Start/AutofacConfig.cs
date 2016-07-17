using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using System.Web.Mvc;

namespace EasyGeneratorMin
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