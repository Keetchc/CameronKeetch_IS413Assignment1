using CameronKeetch_Assignment1.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CameronKeetch_Assignment1.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("CalculateGrade")]
        public IActionResult CalculateGrade()
        {
            return View();
        }

        [HttpPost("CalculateGrade")]
        public IActionResult CalculateGrade(CalculateGradeModel model)
        {
            return View();
        }
    }
}
