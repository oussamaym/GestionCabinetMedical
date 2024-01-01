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
    public class RendezVousController : Controller
    {
        private readonly GCMContext _context;

        public RendezVousController(GCMContext context)
        {
            _context = context;
        }

        // GET: RendezVous
        public async Task<IActionResult> Index()
        {
            var gCMContext = _context.RendezVous.Include(r => r.Consultation).Include(r => r.Medecin).Include(r => r.Patient);
            return View(await gCMContext.ToListAsync());
        }


        // GET: RendezVous/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rendezVous = await _context.RendezVous
                .Include(r => r.Consultation)
                .Include(r => r.Medecin)
                .Include(r => r.Patient)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rendezVous == null)
            {
                return NotFound();
            }

            return View(rendezVous);
        }

        // GET: RendezVous/Create
        public IActionResult Create()
        {
            ViewData["ConsultationId"] = new SelectList(_context.Set<Consultation>(), "Id", "Id");
            ViewData["MedecinId"] = new SelectList(_context.Medecin, "Id", "Id");
            ViewData["PatientId"] = new SelectList(_context.Patient, "Id", "Id");
            return View();
        }

        // POST: RendezVous/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Date,PatientId,MedecinId,ConsultationId")] RendezVous rendezVous)
        {
            if (ModelState.IsValid)
            {
                _context.Add(rendezVous);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ConsultationId"] = new SelectList(_context.Set<Consultation>(), "Id", "Id", rendezVous.ConsultationId);
            ViewData["MedecinId"] = new SelectList(_context.Medecin, "Id", "Id", rendezVous.MedecinId);
            ViewData["PatientId"] = new SelectList(_context.Patient, "Id", "Id", rendezVous.PatientId);
            return View(rendezVous);
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> PrendreRendezVous([Bind("Id,Date,PatientId,MedecinId,ConsultationId")] RendezVous rendezVous)
        {
            if (ModelState.IsValid)
            {

                _context.Add(rendezVous);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            ViewData["ConsultationId"] = new SelectList(_context.Set<Consultation>(), "Id", "Id", rendezVous.ConsultationId);
            ViewData["MedecinId"] = new SelectList(_context.Medecin, "Id", "Id", rendezVous.MedecinId);
            ViewData["PatientId"] = new SelectList(_context.Patient, "Id", "Id", rendezVous.PatientId);
            return View(rendezVous);
        }

        // GET: RendezVous/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rendezVous = await _context.RendezVous.FindAsync(id);
            if (rendezVous == null)
            {
                return NotFound();
            }
            ViewData["ConsultationId"] = new SelectList(_context.Set<Consultation>(), "Id", "Id", rendezVous.ConsultationId);
            ViewData["MedecinId"] = new SelectList(_context.Medecin, "Id", "Id", rendezVous.MedecinId);
            ViewData["PatientId"] = new SelectList(_context.Patient, "Id", "Id", rendezVous.PatientId);
            return View(rendezVous);
        }

        // POST: RendezVous/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Id,Date,PatientId,MedecinId,ConsultationId")] RendezVous rendezVous)
        {
            if (id != rendezVous.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(rendezVous);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!RendezVousExists(rendezVous.Id))
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
            ViewData["ConsultationId"] = new SelectList(_context.Set<Consultation>(), "Id", "Id", rendezVous.ConsultationId);
            ViewData["MedecinId"] = new SelectList(_context.Medecin, "Id", "Id", rendezVous.MedecinId);
            ViewData["PatientId"] = new SelectList(_context.Patient, "Id", "Id", rendezVous.PatientId);
            return View(rendezVous);
        }

        // GET: RendezVous/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var rendezVous = await _context.RendezVous
                .Include(r => r.Consultation)
                .Include(r => r.Medecin)
                .Include(r => r.Patient)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (rendezVous == null)
            {
                return NotFound();
            }

            return View(rendezVous);
        }

        // POST: RendezVous/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var rendezVous = await _context.RendezVous.FindAsync(id);
            if (rendezVous != null)
            {
                _context.RendezVous.Remove(rendezVous);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool RendezVousExists(long id)
        {
            return _context.RendezVous.Any(e => e.Id == id);
        }
    }
}
