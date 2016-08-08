using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace EasyGeneratorMin.Web
{
    public class ResetSingleAnswersWebApiActionFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            var selectQuestionRepository = actionContext.Request.GetDependencyScope()
                .GetService(typeof(IRepository<SelectQuestion>)) as IRepository<SelectQuestion>;

            var requestContent = actionContext.Request.Content.ReadAsStringAsync().Result;

            if (requestContent == null)
                throw new ArgumentNullException();

            string id;
            string isCorrectly;
            var deserealizedArguments = JsonConvert.DeserializeObject<Dictionary<string, string>>(requestContent);

                deserealizedArguments.TryGetValue("id", out id);
                deserealizedArguments.TryGetValue("isCorrectly", out isCorrectly);

            var selectQuestions = selectQuestionRepository.GetCollection();

            var selectQuestion = selectQuestions.First( c => {

                if (c.Answers.FirstOrDefault(o => o.Id == Guid.Parse(id)) != null)
                    return true;

                return false;
            });

            if (selectQuestion.Type == "Multiple")
                return;

            var answer = selectQuestion.Answers.FirstOrDefault(c => c.IsCorrectly == true);

            if (answer != null && bool.Parse(isCorrectly) != false)
                answer.IsCorrectly = false;
        }
    }
}