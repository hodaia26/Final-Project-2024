using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace BLL.Converter
{
    public class Coursimconverter
    {
        public static CoursimDTO ConvertTdODTO(coursim c)
        {
            teacher teacher = new TeacherDAL().GetTeacherById(c.IDTeacher);
            coursim course =new  CoursimDAL().GetCourseById(c.Idcourse);
            return new CoursimDTO()
            {
                classEnd = c.classEnd,
                classStart = c.classStart,
                Idcourse = c.Idcourse,
                idSubject=c.idSubject,
                IDTeacher = c. IDTeacher,
                units = c.units,
                TeacherName = teacher.name,
                TeacherLastName =teacher.lastName,
                Domaine = course.SubjectOfCoursim.domaineName,
                Subject = course.SubjectOfCoursim.name,
                Type = c.Type,
                Statut = c.Statut,
                Date = c.Date

            };

        }

        public static List<CoursimDTO> ConverttoDTOall(List<coursim> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static coursim ConvertTODTO(CoursimDTO coursimDTO)
        {
            return new coursim()
            {
              units = coursimDTO.units,
              classStart= coursimDTO.classStart,
              Idcourse = coursimDTO.Idcourse,
              idSubject=coursimDTO.idSubject,
              IDTeacher= coursimDTO. IDTeacher,
              classEnd = coursimDTO. classEnd,
              Type = coursimDTO.Type,
              Statut = coursimDTO.Statut,
              Date=coursimDTO.Date
            };

        }
        public static List<coursim> ConverttoDTOall(List<CoursimDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }

    }
}
