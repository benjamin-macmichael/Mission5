// Import necessary namespaces
using Microsoft.AspNetCore.Mvc;
using Mission5VideoEditing.Models;
using System.Diagnostics;

// Declare the controller class for handling Home-related actions
namespace Mission5VideoEditing.Controllers
{
    public class HomeController : Controller
    {
        // Logger to capture and handle errors or information
        private readonly ILogger<HomeController> _logger;

        // Constructor to inject the logger into the controller
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        // Action method for the default home page (Index)
        public IActionResult Index()
        {
            return View();
        }

        //Services page
        public IActionResult Services()
        {
            return View();
        }

        // Action method to handle and display errors
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            // Create an ErrorViewModel to pass error details to the view
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}

