using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class StudentinCourseBLL
    {

        StudentInCourseDAL studentInCourseDAL = new StudentInCourseDAL();

        public List<StudentInCourseDTO> GetSIC()
        {
            return Converter.StudentInCourseConverter.ConverttoDTOall(studentInCourseDAL.GetSIC());
        }

        public List<StudentInCourseDTO> getCoursesStudentbyid()
        {
            return Converter.StudentInCourseConverter.ConverttoDTOall(studentInCourseDAL.GetSIC());
        }

        public bool Add(StudentInCourseDTO studentInCourseDTO)
        {
            return studentInCourseDAL.Add(Converter.StudentInCourseConverter.ConvertTODTO(studentInCourseDTO));
        }

      
        public bool Update(StudentInCourseDTO studentInCourseDTO)
        {
            return studentInCourseDAL.Update(Converter.StudentInCourseConverter.ConvertTODTO(studentInCourseDTO));
        }
        public bool Remove(StudentInCourseDTO studentInCourseDTO)
        {
            return studentInCourseDAL.Remove(Converter.StudentInCourseConverter.ConvertTODTO(studentInCourseDTO));
        }
    }
}
