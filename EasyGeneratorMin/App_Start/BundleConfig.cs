using System.Web;
using System.Web.Optimization;

namespace EasyGeneratorMin.Web
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/Scripts/vendor")
                .Include("~/Scripts/jquery-{version}.js")
                .Include("~/Scripts/knockout-{version}.js")
                .Include("~/Scripts/sammy-{version}.js")
                );

            bundles.Add(
              new StyleBundle("~/Content/css")
              .Include("~/Content/style.css")
              );
        }
    }
}