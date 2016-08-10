using Autofac;
using Autofac.Integration.Mvc;
using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class AutofacConfigMvc
    {
        public static void ConfigureContainer()
        {
            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterType<CourseDataContext>()
                .As<IUnitOfWork>()
                .As<IDatabaseContext>()
                .InstancePerLifetimeScope();

            builder.Register(c => Mapper.Instance).As<IMapper>();

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }
    }
}