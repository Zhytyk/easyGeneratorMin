using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace EasyGeneratorMin
{
    class ArgumentException : FilterAttribute, IExceptionFilter
    {
        public void OnException(ExceptionContext exceptionContext)
        {
            if (!exceptionContext.ExceptionHandled && exceptionContext.Exception is ArgumentOutOfRangeException)
            {
                exceptionContext.Result = new JsonResult {
                    Data = new ArgumentOutOfRangeException("You have inputed invalid data to fields!")
                };
                exceptionContext.ExceptionHandled = true;
            }
        }
    }
}
