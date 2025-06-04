using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class DomaineBLL
    {
        DomaineDAL domaineDAL = new DomaineDAL();




        public List<DomaineDTO> GetDomain()
        {
            return Converter.DomainConverter.ConverttoDTOall(domaineDAL.GetDomain());
        }


        
        public bool Add(DomaineDTO domaineDTO)
        {
            return domaineDAL.Add(Converter.DomainConverter.ConvertTODTO(domaineDTO));
        }

        public bool Update(DomaineDTO domaineDTO)
        {
            return domaineDAL.Update(Converter.DomainConverter.ConvertTODTO(domaineDTO));
        }
        public bool Remove(DomaineDTO domaineDTO)
        {
            return domaineDAL.Remove(Converter.DomainConverter.ConvertTODTO(domaineDTO));
        }
    }
}
