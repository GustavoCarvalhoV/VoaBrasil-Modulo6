using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace VoaBrasil_api.Models {
    public class Destino 
    {
        [Key]
        public int Id { get; set; }

        public string Cidade { get; set; }

        public string Estado { get; set; }

        [JsonIgnore]
        public List<Passagem> Passagens { get; set; }
    }
}
