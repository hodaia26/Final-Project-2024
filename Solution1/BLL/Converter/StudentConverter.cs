using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class StudentConverter
    {
        public static StudentDTO ConvertTdODTO(student c)
        {
            if(c == null) return null;
            return new StudentDTO()
            {
                adresse = c.adresse,
                email = c.email,
                Idstudent=c.Idstudent,
                lastName = c.lastName,
                name = c.name,
                NameClass = c.NameClass,
                Pass = c.Pass   
                
            };

        }

        public static List<StudentDTO> ConverttoDTOall(List<student> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static student ConvertTODTO(StudentDTO studentDTO)
        {
            return new student()
            {

                adresse = studentDTO.adresse,
                email = studentDTO.email,
                Idstudent = studentDTO.Idstudent,
                lastName = studentDTO.lastName,
                name = studentDTO.name,
                NameClass = studentDTO.NameClass,
                Pass = studentDTO.Pass


            };

        }
        public static List<student> ConverttoDTOall(List<StudentDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }

        internal static StudentDTO ConvertTdODTO(List<student> students)
        {
            throw new NotImplementedException();
        }
    }
}
