using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http.Cors;
using System.Web.Http;

namespace API2
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            var corsAttr = new EnableCorsAttribute("http://localhost:4200", "*", "*") // Origine, méthodes, en-têtes
            {
                SupportsCredentials = true // Autoriser le partage des informations d'identification
            };
            config.EnableCors(corsAttr);

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }


}
