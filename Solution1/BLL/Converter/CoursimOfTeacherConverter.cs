using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    public class CoursimOfTeacherConverter
    {

       
            public static CoursimOfTeacherDTO ConvertTdODTO(CoursimOfTeacher d)
            {
            teacher teacher = new TeacherDAL().GetTeacherById(d.IdTeacher);
            CoursimOfTeacher CoursimOfTeacher = new CoursimOfTeacherDAL().GetCoursimofteacherById(d.IdCoursimOfTeacher);
            return new CoursimOfTeacherDTO()
            {
                IdCoursimOfTeacher = d.IdCoursimOfTeacher,
                IdTeacher = d.IdTeacher,
                Matiere = d.Matiere,
                NameClassEnd = d.NameClassEnd,
                name = teacher.name,
                adresse = teacher.adresse,
                lastName = teacher.lastName,
                Genre = teacher.Genre,
                Description = teacher.Description,
                Ville = teacher.Ville,
                Prix = teacher.Prix,
                Image = teacher.Image


            };

        }



        public static List<CoursimOfTeacherDTO> ConverttoDTOall(List<CoursimOfTeacher> q)
            {
                return q.Select(a => ConvertTdODTO(a)).ToList();
            }

            public static CoursimOfTeacher ConvertTODTO(CoursimOfTeacherDTO CoursimOfTeacherDTO)
            {
            return new CoursimOfTeacher()
            {
                IdCoursimOfTeacher = CoursimOfTeacherDTO.IdCoursimOfTeacher,
                IdTeacher = CoursimOfTeacherDTO.IdTeacher,
                Matiere = CoursimOfTeacherDTO.Matiere,
                NameClassEnd = CoursimOfTeacherDTO.NameClassEnd,
                NameClassStart = CoursimOfTeacherDTO.NameClassStart,
                  prix = CoursimOfTeacherDTO.prix,
                };

            }
            public static List<CoursimOfTeacher> ConverttoDTOall(List<CoursimOfTeacherDTO> q)
            {
                return (q.Select(a => ConvertTODTO(a)).ToList());
            }
        }
    }

