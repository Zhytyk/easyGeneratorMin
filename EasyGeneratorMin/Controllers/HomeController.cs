using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EasyGeneratorMin.Controllers
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