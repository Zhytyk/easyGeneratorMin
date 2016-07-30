using AutoMapper;
using EasyGeneratorMin.DataAccess;
using EasyGeneratorMin.Models;
using System;
using System.Linq;
using System.Web.Mvc;

namespace EasyGeneratorMin.Web
{
    public class OverviewController : Controller
    {

        [Route("overview", Name = "Overview")]
        public ActionResult Index()
        {
            return View();
        }

    }
}