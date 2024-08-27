using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using chatsystem.Database;
using chatsystem.Models;
using System.IO;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;

namespace chatsystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkingController : ControllerBase
    {

        private readonly ApplicationDbContext context;
        private readonly IConfiguration configuration;
        private readonly IWebHostEnvironment webHostEnvironment;
        public WorkingController(ApplicationDbContext _context, IConfiguration _configuration, IWebHostEnvironment _webHostEnvironment)

        {
            context = _context;
            configuration = _configuration;
            webHostEnvironment = _webHostEnvironment;
        }



        [HttpPost("register")]
        public async Task<IActionResult> Register([FromForm] string email, [FromForm] string name, [FromForm] string password, [FromForm] string gender)
        {
          

            // Create a new Register entity
            var register = new Register
            {
                Email = email,
                Name = name,
                Password = password,
                Gender = gender,
                Image = "/images/userimage.png"
            };

          

            context.Registers.Add(register);
            await context.SaveChangesAsync();

            return Ok();
        }
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromForm] string email, [FromForm] string password)
        {
            // Check if user exists in the database
            var user = await context.Registers
                .SingleOrDefaultAsync(u => u.Email == email && u.Password == password);

            if (user == null)
            {
                return Unauthorized(new { message = "Invalid email or password" });
            }

            // Generate JWT token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Convert.FromBase64String(configuration["Jwt:Key"]); // Get key from configuration
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(ClaimTypes.Name, user.Name)
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                Issuer = configuration["Jwt:Issuer"], // Ensure issuer is included
                Audience = configuration["Jwt:Audience"], // Ensure audience is included
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var tokenString = tokenHandler.WriteToken(token);

            return Ok(new { Token = tokenString });
        }

        [Authorize]
        [HttpGet("profile")]
        public async Task<IActionResult> Profile()
        {
            var email = User.FindFirst(ClaimTypes.Email)?.Value;

            if (email == null)
            {
                return Unauthorized();
            }

            var user = await context.Registers
                .SingleOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            return Ok(new
            {
                Name = user.Name,
                Image = user.Image, // Assuming you have an image path
                Password = user.Password, // Ideally, you shouldn't send passwords
                Gender = user.Gender
            });
        }

        [Authorize]
        [HttpPut("profile")]
        public async Task<IActionResult> UpdateProfile([FromForm] UpdateProfileModel model)
        {
            var email = User.FindFirst(ClaimTypes.Email)?.Value;

            if (email == null)
            {
                return Unauthorized();
            }

            var user = await context.Registers.SingleOrDefaultAsync(u => u.Email == email);

            if (user == null)
            {
                return NotFound(new { message = "User not found" });
            }

            // Update user fields
            user.Name = model.Name;
            user.Password = model.Password;
            user.Gender = model.Gender;

            // Handle the image upload
            if (model.Image != null)
            {
                // Check if the user has an existing image
                if (!string.IsNullOrEmpty(user.Image))
                {
                    // Get the old image file path
                    var oldFilePath = Path.Combine(webHostEnvironment.ContentRootPath, "images", Path.GetFileName(user.Image));

                    // Get the filename from the path
                    var oldFileName = Path.GetFileName(oldFilePath);

                    // Check if the file name is not "userimage.png"
                    if (oldFileName != "userimage.png" && System.IO.File.Exists(oldFilePath))
                    {
                        // Delete the old image file
                        System.IO.File.Delete(oldFilePath);
                    }
                }

                // Generate new file name and path
                var fileName = $"{Guid.NewGuid()}_{model.Image.FileName}";
                var filePath = Path.Combine(webHostEnvironment.ContentRootPath, "images", fileName);

                // Save the new image file
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await model.Image.CopyToAsync(stream);
                }

                // Update the user with the new image path
                user.Image = $"/images/{fileName}";
            }

            // Save changes to the database
            await context.SaveChangesAsync();

            return Ok(new { message = "Profile updated successfully" });
        }


        [Authorize]
        [HttpGet("validateToken")]
        public IActionResult ValidateToken()
        {
            return Ok(new { message = "Token is valid" });
        }



    }
}
