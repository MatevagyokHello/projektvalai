﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApp.Data;
using System;
using System.Linq;
using System.Threading.Tasks;

namespace MyApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TermekekController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TermekekController(ApplicationDbContext context)
        {
            _context = context;
        }

        // 🔹 Termékek lekérdezése a képekkel együtt
        [HttpGet]
        public async Task<IActionResult> GetTermekek([FromQuery] int? kategoriaId)
        {
            var query = _context.Termekek.Include(t => t.Kategoria).AsQueryable();

            if (kategoriaId.HasValue)
            {
                query = query.Where(t => t.kategoria_id == kategoriaId);
            }

            var termekek = await query
                .Select(t => new
                {
                    t.Id,
                    t.Nev,
                    t.Ar,
                    t.kategoria_id,
                    KategoriaNev = t.Kategoria.Nev,
                    Kep = t.Kep != null ? Convert.ToBase64String(t.Kep) : null
                })
                .ToListAsync();

            return Ok(termekek);
        }
    }
}
