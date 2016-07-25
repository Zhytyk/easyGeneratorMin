using Autofac;
using Autofac.Integration.Mvc;
using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System.Reflection;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {

            var builder = new ContainerBuilder();

            builder.RegisterControllers(typeof(MvcApplication).Assembly);

            builder.RegisterModelBinders(Assembly.GetExecutingAssembly());
            builder.RegisterModelBinderProvider();


            builder.RegisterType<CourseDataContext>()
                .As<IUnitOfWork>()
                .As<IDatabaseContext>()
                .InstancePerLifetimeScope();

            builder.RegisterType<Repository<Course>>()
                .As<IRepository<Course>>();

            builder.RegisterType<Repository<Section>>()
                .As<IRepository<Section>>();

            builder.Register(c => Mapper.Instance).As<IMapper>();

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

        }
    }
}