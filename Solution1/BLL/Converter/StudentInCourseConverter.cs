using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Converter
{
    public class StudentInCourseConverter
    {
        public static StudentInCourseDTO ConvertTdODTO(StudentInCourse c)
        {
            //j'ai le stincourse je mets student et course pour pouvoir toucher a ts ce qui est ds chq tableau
            CoursimDAL coursimDAL = new CoursimDAL();
            student student = new StudentDAL().GetStudents().Find(a => a.Idstudent == c.idStudent);
            coursim course= coursimDAL.GetCourseById(c.IdCourse);
            return new StudentInCourseDTO()
            {
                //Dateend = c.Dateend,
                // DateStart = c.Dateend,
                IdCourse = c.IdCourse,
                ClassStart = course.classStart,
                ClassEnd = course.classEnd,
                Units = course.units,
                Domaine = course.SubjectOfCoursim.name,
                Subject = course.SubjectOfCoursim.domaineName,
                Type = course.Type,
                Date=course.Date,
                idStudent = c.idStudent,
                IdStudentInCourse = c.IdStudentInCourse,
                NameClass = student.NameClass,
                StudentLastName = student.lastName,
                StudentName = student.name,
              
             //  Date=c.DateStart,
            };

        }
      

        public static List<StudentInCourseDTO> ConverttoDTOall(List<StudentInCourse> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static StudentInCourse ConvertTODTO(StudentInCourseDTO studentInCourseDTO)
        {
            return new StudentInCourse()
            {
              //  Dateend = studentInCourseDTO.Dateend,
              //  DateStart = studentInCourseDTO.Dateend,
                IdCourse = studentInCourseDTO.IdCourse,
                idStudent = studentInCourseDTO.idStudent,
                IdStudentInCourse = studentInCourseDTO.IdStudentInCourse,
                //ClassStart = studentInCourseDTO.ClassStart,
                //ClassEnd = studentInCourseDTO.ClassEnd,
                //Units= studentInCourseDTO.Units,
                //Domaine= studentInCourseDTO.Domaine,
                //Subject = studentInCourseDTO.Subject,
                //StudentName = studentInCourseDTO.StudentName,
                //StudentLastName =studentInCourseDTO.StudentLastName,
                //NameClass = studentInCourseDTO.NameClass,
                //Date=studentInCourseDTO.Date,
            };

        }
        public static List<StudentInCourse> ConverttoDTOall(List<StudentInCourseDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}
