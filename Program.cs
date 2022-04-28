using ReactPr.Hub;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using ReactPr.Models;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddSignalR();

builder.Services.AddDbContext<IdentityContext>(opts=>{
    opts.UseSqlite(connectionString);
});

/*builder.Services.Configure<IdentityOptions>(opts=>{
    opts.Password.RequiredLength=6;
    opts.Password.RequireNonAlphanumeric=false;
    opts.Password.RequireLowercase=true;
    opts.Password.RequireUppercase=true;
    opts.Password.RequireDigit=true;
});
*/
builder.Services.AddIdentity<IdentityUser,IdentityRole>().AddEntityFrameworkStores<IdentityContext>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("ClientPermission", policy =>
    {
        policy.AllowAnyHeader()
            .AllowAnyMethod()
            .WithOrigins("https://localhost:44490")
            .AllowCredentials();
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

app.UseCors("ClientPermission");


app.MapHub<HubTest>("/hubtest");
app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");;

app.Run();
