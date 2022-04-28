using System;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace ReactPr.Models
{
    public class IdentityContext:IdentityDbContext<IdentityUser>
    {
        public IdentityContext (DbContextOptions<IdentityContext> opts):
        base(opts){}
    }
}
