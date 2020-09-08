using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Apps.Pos.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Apps.Pos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalesController : ControllerBase
    {
        private readonly DataContext _context;

        public SalesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/Sales
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SaleEntry>>> GetSales()
        {
            return await _context.SaleEntries.ToListAsync();
        }

        // GET: api/Sales/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SaleEntry>> GetSales(int id)
        {
            var sales = await _context.SaleEntries.FindAsync(id);

            if (sales == null)
            {
                return NotFound();
            }

            return sales;
        }

        // PUT: api/Sales/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSales(int id, SaleEntry saleEntry)
        {
            if (id != saleEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(saleEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SaleEntryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Sales
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<SaleEntry>> PostSales(SaleEntry sales)
        {
            _context.SaleEntries.Add(sales);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSales", new { id = sales.Id }, sales);
        }

        // DELETE: api/Sales/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SaleEntry>> DeleteSales(int id)
        {
            var saleEntry = await _context.SaleEntries.FindAsync(id);
            if (saleEntry == null)
            {
                return NotFound();
            }

            _context.SaleEntries.Remove(saleEntry);
            await _context.SaveChangesAsync();

            return saleEntry;
        }

        private bool SaleEntryExists(int id)
        {
            return _context.SaleEntries.Any(e => e.Id == id);
        }
    }
}
