using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using EasyGeneratorMin.Models;

namespace EasyGeneratorMin.Web
{
    public class AutoMapperConfig
    {
        public static DateTime Jan1St1970 = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

        public static void RegisterMappings()
        {
            Mapper.Initialize(config =>
            {

                config.CreateMap<Section, SectionModel>()
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => ((CurrentMillis(src.CreatedDate.Ticks) / TimeSpan.TicksPerMillisecond))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => ((CurrentMillis(src.LastUpdatedDate.Ticks) / TimeSpan.TicksPerMillisecond))));

                config.CreateMap<Course, CourseModel>()
                    .ForMember(opt => opt.Sections, opt => opt.MapFrom(src => src.Sections))
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => ((CurrentMillis(src.CreatedDate.Ticks) / TimeSpan.TicksPerMillisecond))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => ((CurrentMillis(src.LastUpdatedDate.Ticks) / TimeSpan.TicksPerMillisecond))));
            });
        }

        private static long CurrentMillis(long date)
        {

            DateTime Jan1St1970 = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            return (date - Jan1St1970.Ticks);

        }
    }

}