using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    internal class DisponibiliteConverter
    {
        public static DisponibiliteDTO ConvertTdODTO(Disponibilite c)
        {
            return new DisponibiliteDTO()
            {
                dateend = c.dateend,
                DateStart = c.DateStart,
                IdTeacher = c.IdTeacher,
                IdDisponibilite = c.IdDisponibilite

            };

        }

        public static List<DisponibiliteDTO> ConverttoDTOall(List<Disponibilite> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Disponibilite ConvertTODTO(DisponibiliteDTO DisponibiliteDTO)
        {
            return new Disponibilite()
            {
                dateend = DisponibiliteDTO.dateend,
                DateStart = DisponibiliteDTO.DateStart,
                IdDisponibilite = DisponibiliteDTO.IdDisponibilite,
                IdTeacher = DisponibiliteDTO.IdTeacher


            };

        }
        public static List<Disponibilite> ConverttoDTOall(List<DisponibiliteDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
