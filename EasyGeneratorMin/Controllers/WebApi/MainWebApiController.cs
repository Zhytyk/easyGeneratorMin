using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace EasyGeneratorMin.Web
{
    [NullWebApiExceptionFilter]
    [OutOfRangeWebApiExceptionFilter]
    [SaveUnitOfWorkWebApiActionFilter]
    public class MainWebApiController : ApiController
    {
        protected readonly IMapper _mapper;

        public MainWebApiController(IMapper mapper)
        {
            _mapper = mapper;
        }
    }
}
