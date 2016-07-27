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
                exceptionContext.Result = new JsonResult {
                    Data = new {error = "You have inputed invalid data to fields!"}
                };
                exceptionContext.ExceptionHandled = true;
            }
        }
    }
}
