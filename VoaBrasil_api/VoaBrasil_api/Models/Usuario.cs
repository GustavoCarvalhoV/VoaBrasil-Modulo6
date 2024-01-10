using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VoaBrasil_api.Models {
    public class Usuario 
    { 
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Este campo é obrigatorio")]
        [MaxLength(60, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 60 caracteres")]
        public string Nome { get; set; }
        
        public string Email { get; set; }


        public string Senha { get; set; }

        public string Rg { get; set; }              

        public string Cpf   { get; set; }

        public string Telefone { get; set; }

        [JsonIgnore]
        public List<Passagem> Passagens { get; set; }
    }
}
