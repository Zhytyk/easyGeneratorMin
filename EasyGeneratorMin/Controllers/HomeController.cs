using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class HomeController : Controller
    {
        
        [Route("", Name = "Home")]
        public ActionResult Index()
        {
            return View();
        }
    }
}