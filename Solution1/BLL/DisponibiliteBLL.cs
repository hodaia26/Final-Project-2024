using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public class DisponibiliteBLL
    {
        DisponibiliteDAL DisponibiliteDAL = new DisponibiliteDAL();
        public bool AddDisponibilite(DisponibiliteDTO DisponibiliteDTO)
        {
            return DisponibiliteDAL.Add(Converter.DisponibiliteConverter.ConvertTODTO(DisponibiliteDTO));
        }

        public List<DisponibiliteDTO> GetDisponibilite()
        {
            return Converter.DisponibiliteConverter.ConverttoDTOall(DisponibiliteDAL.GetDisponibilite());
        }

        public bool Remove(DisponibiliteDTO DisponibiliteDTO)
        {
            return DisponibiliteDAL.Remove(Converter.DisponibiliteConverter.ConvertTODTO(DisponibiliteDTO));
        }
    }
}
