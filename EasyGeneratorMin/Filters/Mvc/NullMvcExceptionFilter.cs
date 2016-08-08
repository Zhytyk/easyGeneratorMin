using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class NullMvcExceptionFilter : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext exceptionContext)
        {
            if (!exceptionContext.ExceptionHandled && exceptionContext.Exception is ArgumentNullException)
            {
                exceptionContext.Result = new HttpStatusCodeResult(HttpStatusCode.BadRequest);
                exceptionContext.ExceptionHandled = true;
            }
        }
    }
}