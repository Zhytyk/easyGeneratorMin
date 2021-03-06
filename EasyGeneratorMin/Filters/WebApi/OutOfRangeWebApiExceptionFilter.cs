﻿using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace EasyGeneratorMin.Web
{
    public class OutOfRangeWebApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is ArgumentOutOfRangeException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
    }
}
