using GestionCabinetMedical.Data;
using GestionCabinetMedical.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.CodeAnalysis.Scripting;
using System.Diagnostics;

namespace GestionCabinetMedical.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly GCMContext _authContext;

        public HomeController(ILogger<HomeController> logger, GCMContext authContext)
        {
            _logger = logger;
            _authContext = authContext;
        }

        public IActionResult Index()
        {
            if (HttpContext.Session.GetString("admin") !=null && HttpContext.Session.GetString("admin")=="admin")
            {
                return View("Index");
            }
                return RedirectToAction("Login");
        }

        public IActionResult Login()
        {

            return View();
        }

        [HttpPost]
        public ActionResult Login(AuthModel auth)
        {
            if (ModelState.IsValid)
            {
                try
                {
                    if (auth.TypePersonnel == "Admin")
                    {
                        if (auth.Login == "admin@gmail.com" && auth.Password == "123")
                        {
                            HttpContext.Session.SetString("admin", "admin");
                            return RedirectToAction("Index", "Home");
                        }
                        else
                        {
                            return View(auth);
                        }
                     
                    }
                    if (auth.TypePersonnel == "Medecin")
                    {
                        var utilisateur=_authContext.Medecin
                       .FirstOrDefault<Medecin>(obj => (obj.Email.Equals(auth.Login)));


                        if (utilisateur == null || BCrypt.Net.BCrypt.Verify(auth.Password, utilisateur.Password) == false)
                        {
                            return BadRequest("400-01");
                        }
                        HttpContext.Session.SetString("medecin", utilisateur.Email);
                        return RedirectToAction("Index", "Medecins");
                    }
                    else if(auth.TypePersonnel == "Infirmier")
                    {
                        var utilisateur =_authContext.Infirmier
                       .FirstOrDefault<Infirmier>(obj => (obj.Email.Equals(auth.Login)));
                        if (utilisateur == null || BCrypt.Net.BCrypt.Verify(auth.Password, utilisateur.Password) == false)
                        {
                            return BadRequest("400-01");
                        }
                        HttpContext.Session.SetString("infirmier",utilisateur.Email);
                        return RedirectToAction("Index", "Infirmiers");
                    }
                    else if (auth.TypePersonnel == "Patient")
                    {
                        var utilisateur = _authContext.Patient
                       .FirstOrDefault<Patient>(obj => (obj.Email.Equals(auth.Login)));
                        if (utilisateur == null || BCrypt.Net.BCrypt.Verify(auth.Password, utilisateur.Password) == false)
                        {
                            return BadRequest("400-01");
                        }
                        HttpContext.Session.SetString("patient", utilisateur.Email);
                        return RedirectToAction("Index_patient", "Home");
                    }

                }
                catch (Exception ex)
                {
                    return View(auth);
                }
            }

            return View(auth);
        }
        public IActionResult Index_patient()
        {
			if (HttpContext.Session.GetString("patient") != null)
            {
				return View("Index_patient");
			}
			return RedirectToAction("Login");
		}

        public IActionResult Privacy()
        {
            return View();
        }
    }
}
