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
    public class ConsultationsController : Controller
    {
        private readonly GCMContext _context;

        public ConsultationsController(GCMContext context)
        {
            _context = context;
        }

        // GET: Consultations
        public async Task<IActionResult> Index()
        {
            var gCMContext = _context.Consultation.Include(c => c.RendezVous).Include(c => c.Traitement);
            return View(await gCMContext.ToListAsync());
        }

        // GET: Consultations/Details/5
        public async Task<IActionResult> Details(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consultation = await _context.Consultation
                .Include(c => c.RendezVous)
                .Include(c => c.Traitement)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (consultation == null)
            {
                return NotFound();
            }

            return View(consultation);
        }

        // GET: Consultations/Create
        public IActionResult Create()
        {
            ViewData["RendezVousId"] = new SelectList(_context.RendezVous, "Id", "Id");
            ViewData["TraitementId"] = new SelectList(_context.Traitement, "Id", "Id");
            return View();
        }

        // POST: Consultations/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Diagnostic,RendezVousId,TraitementId")] Consultation consultation, long id)
        {
            
            
                consultation.RendezVousId = id;
                _context.Add(consultation);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            

            ViewData["RendezVousId"] = new SelectList(_context.RendezVous, "Id", "Id", consultation.RendezVousId);
            ViewData["TraitementId"] = new SelectList(_context.Traitement, "Id", "Id", consultation.TraitementId);
            return View(consultation);
        }


        // GET: Consultations/Edit/5
        public async Task<IActionResult> Edit(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consultation = await _context.Consultation.FindAsync(id);
            if (consultation == null)
            {
                return NotFound();
            }
            ViewData["RendezVousId"] = new SelectList(_context.RendezVous, "Id", "Id", consultation.RendezVousId);
            ViewData["TraitementId"] = new SelectList(_context.Traitement, "Id", "Id", consultation.TraitementId);
            return View(consultation);
        }

        // POST: Consultations/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(long id, [Bind("Id,Diagnostic,RendezVousId,TraitementId")] Consultation consultation)
        {
            if (id != consultation.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(consultation);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ConsultationExists(consultation.Id))
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
            ViewData["RendezVousId"] = new SelectList(_context.RendezVous, "Id", "Id", consultation.RendezVousId);
            ViewData["TraitementId"] = new SelectList(_context.Traitement, "Id", "Id", consultation.TraitementId);
            return View(consultation);
        }

        // GET: Consultations/Delete/5
        public async Task<IActionResult> Delete(long? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var consultation = await _context.Consultation
                .Include(c => c.RendezVous)
                .Include(c => c.Traitement)
                .FirstOrDefaultAsync(m => m.Id == id);
            if (consultation == null)
            {
                return NotFound();
            }

            return View(consultation);
        }

        // POST: Consultations/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(long id)
        {
            var consultation = await _context.Consultation.FindAsync(id);
            if (consultation != null)
            {
                _context.Consultation.Remove(consultation);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ConsultationExists(long id)
        {
            return _context.Consultation.Any(e => e.Id == id);
        }
    }
}
