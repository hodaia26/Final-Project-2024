using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class TeacherConverter
    {


        public static TeacherDTO ConvertTdODTO(teacher c)
        {
            return new TeacherDTO()
            {
                name = c.name,
                adresse = c.adresse,
                email = c.email,
                Idteacher = c.Idteacher,
                lastName = c.lastName,
             //   NameClass = c.NameClass,
                pass = c.pass,
                Matiere = c.Matiere,
                Genre = c.Genre,
                Description = c.Description,
                Ville = c.Ville,
                Prix = c.Prix,
                Statut = c.Statut,
                Image = c.Image

            };

        }

        public static List<TeacherDTO> ConverttoDTOall(List<teacher> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static teacher ConvertTODTO(TeacherDTO teacherDTO)
        {
            return new teacher()
            {
                name = teacherDTO.name,
                adresse = teacherDTO.adresse,
                email = teacherDTO.email,
                Idteacher = teacherDTO.Idteacher,
                lastName = teacherDTO.lastName,
         //       NameClass = teacherDTO.NameClass,
                pass = teacherDTO.pass,
               Matiere = teacherDTO.Matiere,
                Genre = teacherDTO.Genre,
                Description = teacherDTO.Description,
                Ville = teacherDTO.Ville,
                Prix = teacherDTO.Prix,
                Statut = teacherDTO.Statut,
                Image = teacherDTO.Image
            };

        }
        public static List<teacher> ConverttoDTOall(List<TeacherDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}