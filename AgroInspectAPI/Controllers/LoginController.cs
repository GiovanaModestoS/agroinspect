using Microsoft.AspNetCore.Mvc;
using AgroInspectAPI.Data;
using System.Linq;

namespace AgroInspectAPI.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class LoginController : ControllerBase
    {
        private readonly AgroContext _context;

        public LoginController(AgroContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] Models.Usuario usuario)
        {
            var user = _context.Usuarios
                .FirstOrDefault(u => u.Email == usuario.Email && u.Senha == usuario.Senha);

            if (user == null)
                return Unauthorized("Usuário ou senha inválidos");

            return Ok("Login realizado com sucesso");
        }
    }
}
