using System;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;


namespace ReactPr.Models
{
    public class ContextDB:DbContext
    {
        public ContextDB(DbContextOptions options):base(options){
            
        }
        public DbSet<Request> Requests {get;set;}
    }
}
