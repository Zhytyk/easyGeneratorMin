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

        public static void RegisterMappings()
        {
            Mapper.Initialize(config =>
            {
                config.CreateMap<Course, CourseModel>()
                    .ForMember(opt => opt.Sections, opt => opt.MapFrom(src => src.Sections))
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))));

                config.CreateMap<Section, SectionModel>()
                    .ForMember(opt => opt.SelectQuestions, opt => opt.MapFrom(src => src.SelectQuestions))
                    .ForMember(opt => opt.CourseId, opt => opt.MapFrom(src => src.Course.Id))
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))));

                config.CreateMap<SelectQuestion, SelectQuestionModel>()
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))))
                    .ForMember(opt => opt.SectionId, opt => opt.MapFrom(src => src.Section.Id))
                    .ForMember(opt => opt.Answers, opt => opt.MapFrom(src => src.Answers));

                config.CreateMap<SingleSelectQuestion, SingleSelectQuestionModel>()
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))))
                    .ForMember(opt => opt.SectionId, opt => opt.MapFrom(src => src.Section.Id));

                config.CreateMap<MultipleSelectQuestion, MultipleSelectQuestionModel>()
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))))
                    .ForMember(opt => opt.SectionId, opt => opt.MapFrom(src => src.Section.Id));

                config.CreateMap<Answer, AnswerModel>()
                    .ForMember(opt => opt.CreatedDate, opt => opt.MapFrom(src => (ToMillis(src.CreatedDate.Ticks))))
                    .ForMember(opt => opt.LastUpdatedDate, opt => opt.MapFrom(src => (ToMillis(src.LastUpdatedDate.Ticks))))
                    .ForMember(opt => opt.SelectQuestionId, opt => opt.MapFrom(src => src.SelectQuestion.Id));
            });
        }

        private static long ToMillis(long date)
        {

            DateTime Jan1St1970 = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);

            return (date - Jan1St1970.Ticks) / TimeSpan.TicksPerMillisecond;

        }
    }

}