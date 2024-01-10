
using VoaBrasil_api.Models;
using Microsoft.EntityFrameworkCore;

namespace VoaBrasil_api.Context {
    public class DataContext : DbContext 
    {

        public DataContext(DbContextOptions<DataContext> option) : base(option) { } 

        public DbSet<Usuario> Usuarios { get; set; }

        public DbSet<Destino> Destinos { get; set; }

        public DbSet<Passagem> Passagens { get; set; }
    }
}
