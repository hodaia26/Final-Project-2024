using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using RestSharp;


namespace BLL
{
    public class DistanceService
    {
        public static int GetDistance(string origin, string dest)
        {
            try
            {
                string key = "AIzaSyBNVjEXhyDOUvcCECJFY5x_OGKt38dxVBk";
                string uri = $"https://maps.googleapis.com/maps/api/distancematrix/xml?key={key}&origins={origin}&destinations={dest}&mode=driving";
                RestClient client = new RestClient(uri);
              //  client.Timeout = -1;
                RestRequest request = new RestRequest("Get");
                RestResponse response = client.Execute(request);
                XElement element = XElement.Parse(response.Content);
                return int.Parse(element.Descendants("duration").FirstOrDefault()?.Element("value").Value) / 60;

            }
            catch (Exception)
            {

                return 0;
            }
           
        }
    }




}
