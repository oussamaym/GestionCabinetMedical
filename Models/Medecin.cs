using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace GestionCabinetMedical.Models
{
    public class Medecin : Personnel
    {
        [Column(TypeName = "varchar(200)")]
        public string  Specialite { get; set; }
        public ICollection<RendezVous>? RendezVous { get; set; }

    }
}
