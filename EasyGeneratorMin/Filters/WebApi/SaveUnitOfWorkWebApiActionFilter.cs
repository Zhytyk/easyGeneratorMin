using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Filters;

namespace EasyGeneratorMin.Web
{
    public class SaveUnitOfWorkWebApiActionFilter : ActionFilterAttribute
    {

        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            var unitOfWork = actionExecutedContext.Request.GetDependencyScope().GetService(typeof(IUnitOfWork)) as IUnitOfWork;
                
            unitOfWork.Save();
        }
    }
}