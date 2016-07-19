using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
{
    public class CourseController : Controller
    {
        
        [Route("course", Name = "Course")]
        public ActionResult Index()
        {
            return View();
        }
    }
}