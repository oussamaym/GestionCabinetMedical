using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Globalization;

namespace GestionCabinetMedical.Models
{
    public class Personnel
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
        public string Password { get; set; }

    }
}
