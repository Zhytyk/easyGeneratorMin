using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin
{
    public class CourseModelBinder : IModelBinder
    {

        private IRepository<CourseModel> _courseRepository = new CourseRepository(new CourseDataContext());

        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            var valueProvider = bindingContext.ValueProvider;

            
            var id = GetValue(bindingContext, "id");
            var title = GetValue(bindingContext, "title");
            var description = GetValue(bindingContext, "description");

            CourseModel course;

            if (id == null)
            {
                course = new CourseModel();
                course.CreatedDate = DateTime.Now.ToString();
            }
            else
            {
                course = _courseRepository.GetValueById(id);
            }

            course.UpdateCourse(title, description);

            return course;
        }

        private string GetValue(ModelBindingContext context, string name)
        {

            ValueProviderResult result = context.ValueProvider.GetValue(name);

            if (result == null)
                return null;

            return result.AttemptedValue;
        }

    }  
}