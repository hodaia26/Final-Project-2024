using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class DomainConverter
    {
        public static DomaineDTO ConvertTdODTO(Domain d)
        {
            return new DomaineDTO()
            {
                CodeDomaine = d.CodeDomaine,
                domaineName = d.domaineName
            };

        }

        public static List<DomaineDTO> ConverttoDTOall(List<Domain> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Domain ConvertTODTO(DomaineDTO domainDTO)
        {
            return new Domain()
            {
                domaineName = domainDTO.domaineName,
                CodeDomaine = domainDTO.CodeDomaine
            };

        }
        public static List<Domain> ConverttoDTOall(List<DomaineDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
    