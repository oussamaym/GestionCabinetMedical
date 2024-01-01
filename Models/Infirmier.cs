using System.ComponentModel.DataAnnotations.Schema;

namespace GestionCabinetMedical.Models
{
    public class Infirmier : Personnel
    {
        [Column(TypeName = "varchar(200)")]
        public string Departement { get; set; }
    }
}
