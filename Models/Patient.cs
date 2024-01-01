using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace GestionCabinetMedical.Models
{
    public class Patient
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public long Id { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Nom { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Prenom { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Email { get; set; }
        [Column(TypeName = "varchar(200)")]
        public string Password { get; set; }
        public string Adresse { get; set; }
        public DateTime DateNaissance { get; set; }
        public string AntecedantMedical { get; set; }
        public ICollection<RendezVous>? RendezVous { get; set; }
    }
}
