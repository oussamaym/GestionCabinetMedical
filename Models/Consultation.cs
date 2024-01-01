using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace GestionCabinetMedical.Models
{
    public class Consultation
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        public string Diagnostic {  get; set; }
        public int RendezVousId { get; set; } 
        public RendezVous RendezVous { get; set; }
        public long TraitementId { get; set; }
        public Traitement? Traitement { get; set; }
    }
}
