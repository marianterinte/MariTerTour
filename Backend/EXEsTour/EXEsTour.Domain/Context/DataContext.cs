using EXEsTour.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EXEsTour.Domain.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
    }
}