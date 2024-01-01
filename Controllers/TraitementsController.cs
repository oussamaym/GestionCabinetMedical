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
    public class TraitementsController : Controller
    {
        private readonly GCMContext _context;

        public TraitementsController(GCMContext context)
        {
            _context = context;
        }

        // GET: Traitements
        public async Task<IActionResult> Index()
        {
            return View(await _context.Traitement.ToListAsync());
        }

        // GET: Traitements/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var traitement = await _context.Traitement
                .FirstOrDefaultAsync(m => m.Id == id);
            if (traitement == null)
            {
                return NotFound();
            }

            return View(traitement);
        }

        // GET: Traitements/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Traitements/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Description,DateDebut,DateFin,Statut")] Traitement traitement)
        {
            if (ModelState.IsValid)
            {
                _context.Add(traitement);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(traitement);
        }

        // GET: Traitements/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var traitement = await _context.Traitement.FindAsync(id);
            if (traitement == null)
            {
                return NotFound();
            }
            return View(traitement);
        }

        // POST: Traitements/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Id,Description,DateDebut,DateFin,Statut")] Traitement traitement)
        {
            if (id != traitement.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(traitement);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TraitementExists(traitement.Id))
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
            return View(traitement);
        }

        // GET: Traitements/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var traitement = await _context.Traitement
                .FirstOrDefaultAsync(m => m.Id == id);
            if (traitement == null)
            {
                return NotFound();
            }

            return View(traitement);
        }

        // POST: Traitements/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var traitement = await _context.Traitement.FindAsync(id);
            if (traitement != null)
            {
                _context.Traitement.Remove(traitement);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TraitementExists(long id)
        {
            return _context.Traitement.Any(e => e.Id == id);
        }
    }
}
