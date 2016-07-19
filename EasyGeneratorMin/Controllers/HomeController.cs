using System.Web.Mvc;

namespace EasyGeneratorMin.Web.Controllers
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