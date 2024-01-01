using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GestionCabinetMedical.Data;
using GestionCabinetMedical.Models;

namespace GestionCabinetMedical.Controllers
{
    public class InfirmiersController : Controller
    {
        private readonly GCMContext _context;

        public InfirmiersController(GCMContext context)
        {
            _context = context;
        }

        // GET: Infirmiers
        public async Task<IActionResult> Index()
        {
            return View(await _context.Infirmier.ToListAsync());
        }

        // GET: Infirmiers/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var infirmier = await _context.Infirmier
                .FirstOrDefaultAsync(m => m.Id == id);
            if (infirmier == null)
            {
                return NotFound();
            }

            return View(infirmier);
        }

        // GET: Infirmiers/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Infirmiers/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Departement,Id,Nom,Prenom,Email,Password,Type")] Infirmier infirmier)
        {
            if (ModelState.IsValid)
            {
                infirmier.Password = BCrypt.Net.BCrypt.HashPassword(infirmier.Password);
                _context.Add(infirmier);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(infirmier);
        }

        // GET: Infirmiers/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var infirmier = await _context.Infirmier.FindAsync(id);
            if (infirmier == null)
            {
                return NotFound();
            }
            return View(infirmier);
        }

        // POST: Infirmiers/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Departement,Id,Nom,Prenom,Email,Password,Type")] Infirmier infirmier)
        {
            if (id != infirmier.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(infirmier);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!InfirmierExists(infirmier.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(infirmier);
        }

        // GET: Infirmiers/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var infirmier = await _context.Infirmier
                .FirstOrDefaultAsync(m => m.Id == id);
            if (infirmier == null)
            {
                return NotFound();
            }

            return View(infirmier);
        }

        // POST: Infirmiers/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var infirmier = await _context.Infirmier.FindAsync(id);
            if (infirmier != null)
            {
                _context.Infirmier.Remove(infirmier);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool InfirmierExists(long id)
        {
            return _context.Infirmier.Any(e => e.Id == id);
        }
    }
}
