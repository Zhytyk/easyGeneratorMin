using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class AutofacConfig
    {
        public static void ConfigureContainer()
        {

            var builder = new ContainerBuilder();

            var config = GlobalConfiguration.Configuration;

            builder.RegisterApiControllers(Assembly.GetExecutingAssembly());

            builder.RegisterWebApiFilterProvider(config);

            builder.RegisterType<CourseDataContext>()
                .As<IUnitOfWork>()
                .As<IDatabaseContext>()
                .InstancePerLifetimeScope();

            builder.RegisterType<CourseRepository>()
                .As<IRepository<Course>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<Repository<Section>>()
                .As<IRepository<Section>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<SelectQuestionRepository<SelectQuestion>>()
                .As<IRepository<SelectQuestion>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<SelectQuestionRepository<SingleSelectQuestion>>()
                .As<IRepository<SingleSelectQuestion>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<SelectQuestionRepository<MultipleSelectQuestion>>()
                .As<IRepository<MultipleSelectQuestion>>()
                .InstancePerLifetimeScope();

            builder.RegisterType<SelectAnswerRepository>()
                .As<IRepository<Answer>>()
                .InstancePerLifetimeScope();

            builder.Register(c => Mapper.Instance).As<IMapper>();

            var container = builder.Build();

            config.DependencyResolver = new AutofacWebApiDependencyResolver(container);

        }
    }
}