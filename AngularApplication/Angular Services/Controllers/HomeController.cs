using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Angular_Services.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CustomService()
        {
            return View();
        }


        public ActionResult AnchorScrollService()
        {
            return View();
        }

        public ActionResult Routing()
        {
            return View();
        }

        public ActionResult NestedControllerAs()
        {
            return View();
        }
    }
}
