using Microsoft.AspNetCore.Mvc;

namespace AgroInspectAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TesteController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("API AgroInspect funcionando!");
        }
    }
}
