using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace GestionCabinetMedical.Models
{
    public class RendezVous
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public DateTime Date { get; set; }
        public long PatientId { get; set; }
        public Patient Patient { get; set; }
        public long MedecinId { get; set; }
        public Medecin Medecin { get; set; }
        public long ConsultationId { get; set; }
        public Consultation? Consultation { get; set; }
    }
}
