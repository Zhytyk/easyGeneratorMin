using System;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace EasyGeneratorMin.Web
{
    public class NullExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            if (context.Exception is ArgumentNullException)
            {
                context.Response = new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
        }
    }
}