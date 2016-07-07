using System;
using System.Web.Optimization;

[assembly: WebActivator.PostApplicationStartMethod(
    typeof(EasyGeneratorMin.App_Start.DurandalConfig), "PreStart")]

namespace EasyGeneratorMin.App_Start
{
    public static class DurandalConfig
    {
        public static void PreStart()
        {
            DurandalBundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}