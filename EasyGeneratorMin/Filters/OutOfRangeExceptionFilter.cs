using System;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class OutOfRangeExceptionFilter : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext exceptionContext)
        {
            if (!exceptionContext.ExceptionHandled && exceptionContext.Exception is ArgumentOutOfRangeException)
            {
                exceptionContext.Result = new JsonResult
                {
                    Data = new { errorStatusCode = 204 }
                };
                exceptionContext.ExceptionHandled = true;
            }
        }
    }
}
