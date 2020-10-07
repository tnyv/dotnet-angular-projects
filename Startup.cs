using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using AutoMapper;
using System.IO;
using Api.Apps.Portfolio.Services;
using Api.Apps;
using Microsoft.EntityFrameworkCore;
using Lms.Services.UserService;
using Lms.Services.CourseService;
using Lms.Services.RegistrationService;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.ResponseCompression;
using System.IO.Compression;
using System;
using Npgsql;

namespace Api {
    public class Startup {
        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration {
            get;
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            // Enable text compression
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = CompressionLevel.Fastest);
            services.AddResponseCompression(options => {
                options.Providers.Add<GzipCompressionProvider>();
                options.EnableForHttps = true;
            });

            // Configured Heroku postgres DB connection
            var databaseUrl = Configuration["DATABASE_URL"];
            var databaseUri = new Uri(databaseUrl);
            var userInfo = databaseUri.UserInfo.Split(':');

            var builder = new NpgsqlConnectionStringBuilder {
                Host = databaseUri.Host,
                Port = databaseUri.Port,
                Username = userInfo[0],
                Password = userInfo[1],
                Database = databaseUri.LocalPath.TrimStart('/'),
            };

            string connectionString = builder.ToString();
            connectionString = connectionString + ";SSL Mode=Require;Trust Server Certificate=true;";

            services.AddDbContext<DataContext>(context => context.UseNpgsql(connectionString));

            services.AddControllersWithViews();
            services.AddControllers();
            services.AddAutoMapper(typeof(Startup));
            services.AddScoped<IMessageService, MessageService>();
            services.AddScoped<IUserService, UserService>();
            services.AddScoped<ICourseService, CourseService>();
            services.AddScoped<IRegistrationService, RegistrationService>();
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            .AddJwtBearer(options => {
                options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(Configuration["signingKey"])),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });

            // IHttpContextAccessor service lets us utilize JWT claims to associated specific data with user, such as user and registrations.
            // One instance is used in Registrations service currently. 
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // This is used to avoid "possible object cycle was detected which is not supported" error message when creating new
            // registrations between user and registration relations.
            services.AddControllersWithViews().AddNewtonsoftJson(options =>
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddCors(options => {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder => {
                                      builder.WithOrigins(Configuration["CORS"])
                                      .AllowAnyHeader()
                                      .AllowAnyMethod()
                                      .AllowAnyOrigin();
                                  });
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            app.UseResponseCompression();

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            } else {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.Use(async (context, next) => {
                await next();

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value)) {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            app.UseDefaultFiles();
            app.UseStaticFiles();

            if (!env.IsDevelopment()) {
                app.UseHttpsRedirection();
            }

            app.UseRouting();

            app.UseCors(MyAllowSpecificOrigins);

            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });
        }
    }
}