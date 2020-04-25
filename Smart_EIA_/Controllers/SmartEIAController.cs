using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace Smart_EIA_.Controllers
{
    public class SmartEIAController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }

        public ActionResult Contact()
        {
            return View();
        }

        public ActionResult Homepage()
        {
            return View();
        }

        public ActionResult MenuProject()
        {
            return View();
        }
        public ActionResult EnvironmentalRegulartory()
        {
            return View();
        }

        public ActionResult EnvironmentalSmartImap()
        {
            return View();
        }
        public ActionResult Gis()
        {
            return View();
        }
        /*4.อุตสาหรรมปิโตรเคมี*/
        public ActionResult Petrochemical()
        {
            return View();
        }
        /*5.อุตสาหกรรมกลั่นน้ำมันปิโตรเลียม*/
        public ActionResult OliPetrochemical()
        {
            return View();
        }
        /*6.อุตสาหกรรมแยกหรือแปรสภาพก๊าซธรรมชาติ*/
        public ActionResult TransformGas()
        {
            return View();
        }

        /*2.ระบบขนส่งเชื้อเพลิงทางท่อ*/
        public ActionResult PipelineTransportation()
        {

            return View();
        }

        [HttpPost]
        public ActionResult PipelineTransportation(HttpPostedFileBase file)
        {
            if (file.ContentLength > 0)
            {
                var fileName = Path.GetFileName(file.FileName);
                string path = Path.Combine(Server.MapPath("/App_Data/UploadedFiles"), fileName);
                file.SaveAs(path);
            }
            return View();
        }


        /*17.อาคารสูงหรืออาคารขนาดใหญ่พิเศษ*/
        public ActionResult LargeBuildings()
        {

            return View();
        }
        /*19.โรงพยาบาลหรือสถานพยาบาล*/
        public ActionResult Hospital()
        {
            return View();
        }
        /*20.โรงแรมหรือที่พักตากอากาศ*/
        public ActionResult Hotel()
        {
            return View();
        }
        /*21.อาคารอาศัยรวม*/
        public ActionResult ResidentialBuildings()
        {
            return View();
        }
        /*3.นิคมอุตสาหกรรม*/
        public ActionResult Industrialestate()
        {
            return View();
        }
        /*7.โรงงานปรับคุณภาพของเสียรวม*/
        public ActionResult Wasteadjustment()
        {
            return View();
        }
        /*18.การจัดสรรที่ดิน*/
        public ActionResult Landallocation()
        {
            return View();
        }
        /*11.ระบบขนส่งมวลชนที่ใช้ราง*/
        public ActionResult TransportUseRails()
        {
            return View();
        }
        /*12.ท่าเทียบเรือ*/
        public ActionResult Docks()
        {
            return View();
        }
        /*13.ท่าเทียบเรือสำราญกีฬา*/
        public ActionResult SportDocks()
        {
            return View();
        }
        /*14.การถมที่ดินในในทะเล*/
        public ActionResult LandReclamationAtSea()
        {
            return View();
        }
        /*15.การก่อสร้างหรือขยายสิ่งก่อสร้างบริเวณหรือในทะเล*/
        public ActionResult ConstructionOrExpensionAtSea()
        {
            return View();
        }
        /*16.โครงการระบบขนส่งทางอากาศ*/
        public ActionResult AirTransportation()
        {
            return View();
        }
        /*1.การพัฒนาปิโตรเลียม*/
        public ActionResult PetroliumDevelopment()
        {
            return View();
        }
        /*8.โรงไฟฟ้าพลังงานความร้อน*/
        public ActionResult ThemalPowerPlant()
        {
            return View();
        }
        /*9.ระบบทางพิเศษ*/
        public ActionResult ExpressWay()
        {
            return View();
        }
        /*10.ระบบทางพิเศษ*/
        public ActionResult HighWayOrRoad()
        {
            return View();
        }
        /*10.อาคารสูง เพิ่มป่าอนุรักษ์*/
        public ActionResult LargeBuildingsNew()
        {
            return View();
        }

    }
}