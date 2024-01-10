using System.ComponentModel.DataAnnotations;

namespace VoaBrasil_api.Models {
    public class Passagem 
    {
        [Key]
        public int Id { get; set; }

        public float Preco { get; set; }


        public string Horario { get; set; }

        public DateTime DataIda { get; set; }

        public DateTime DataVolta { get; set; }

        public int UsuarioId { get; set; }
        public Usuario Usuario { get; set; }

        public int DestinoId { get; set; } 

        public Destino Destino { get; set; }
    }
}
