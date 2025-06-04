using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public class VilleBLL
    {
        VilleDAL VilleDAL = new VilleDAL();

        
        public List<VilleDTO> GetVilles()
        {
            return Converter.VilleConverter.ConverttoDTOall(VilleDAL.GetVilles());
        }
    }
}
