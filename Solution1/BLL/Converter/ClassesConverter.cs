using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    public class ClassesConverter
    {
        public static ClasseDTO ConvertTdODTO(Classes c)
        {
            return new ClasseDTO()
            {
              IdClaases = c.IdClaases,
               NameClass=c.NameClass,
            };

        }

        public static List<ClasseDTO> ConverttoDTOall(List<Classes> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Classes ConvertTODTO(ClasseDTO classeDTO)
        {
            return new Classes()
            {
              NameClass = classeDTO.NameClass,
              IdClaases= classeDTO.IdClaases,

            };

        }
        public static List<Classes> ConverttoDTOall(List<ClasseDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }

    }
}
