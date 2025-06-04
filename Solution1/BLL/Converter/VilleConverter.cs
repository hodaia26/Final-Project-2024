using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    public class VilleConverter
    {
        public static VilleDTO ConvertTdODTO(Ville G)
        {
            return new VilleDTO()
            {
               IdVille=G.IdVille,
               Ville1=G.Ville1


            };

        }
        public static List<VilleDTO> ConverttoDTOall(List<Ville> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Ville ConvertTODTO(VilleDTO VilleDTOO)
        {
            return new Ville()
            {
                IdVille = VilleDTOO.IdVille,
                Ville1 = VilleDTOO.Ville1,

            };

        }
        public static List<Ville> ConverttoDTOall(List<VilleDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }

}
