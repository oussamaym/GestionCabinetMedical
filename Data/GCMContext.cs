using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GestionCabinetMedical.Models;

namespace GestionCabinetMedical.Data
{
    public class GCMContext : DbContext
    {
        public GCMContext (DbContextOptions<GCMContext> options)
            : base(options)
        {
        }

        public DbSet<GestionCabinetMedical.Models.Medecin> Medecin{ get; set; } = default!;
        public DbSet<GestionCabinetMedical.Models.Patient> Patient { get; set; } = default!;
        public DbSet<GestionCabinetMedical.Models.Infirmier> Infirmier { get; set; } = default!;
        public DbSet<GestionCabinetMedical.Models.RendezVous> RendezVous { get; set; } = default!;
        public DbSet<GestionCabinetMedical.Models.Consultation> Consultation { get; set; } = default!;
        public DbSet<GestionCabinetMedical.Models.Traitement> Traitement { get; set; } = default!;
    }
}
