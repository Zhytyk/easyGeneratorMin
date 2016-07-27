using System;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class NullExceptionFilter : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext exceptionContext)
        {
            if (!exceptionContext.ExceptionHandled && exceptionContext.Exception is ArgumentNullException)
            {
                exceptionContext.Result = new JsonResult
                {
                    Data = new { error = "Data is not found!" }
                };
                exceptionContext.ExceptionHandled = true;
            }
        }
    }
}