using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AutoMapper;
using EasyGeneratorMin.Models;

namespace EasyGeneratorMin
{
    public class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(config => {

                config.CreateMap<Section, SectionModel>();

                config.CreateMap<Course, CourseModel>()
                    .ForMember(opt => opt.Sections, opt => opt.MapFrom(src => src.Sections));
            });
        }
    }
}