using Microsoft.EntityFrameworkCore;
using AgroInspectAPI.Models;

namespace AgroInspectAPI.Data
{
    public class AgroContext : DbContext
    {
        public AgroContext(DbContextOptions<AgroContext> options)
            : base(options)
        {
        }

        public DbSet<Usuario> Usuarios { get; set; }
    }
}
