using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class StudentBLL
    {
        StudentDAL StudentDAL=new StudentDAL();
        ClassesDAL ClassesDAL = new ClassesDAL();

        public List<StudentDTO> GetStudents()
        {
            return Converter.StudentConverter.ConverttoDTOall(StudentDAL.GetStudents());
        }
        public bool Add(StudentDTO studentDTO)
        {
            return StudentDAL.Add(Converter.StudentConverter.ConvertTODTO(studentDTO));
        }

        public StudentDTO Login(string email, string Pass)
        {
           return Converter.StudentConverter.ConvertTdODTO( StudentDAL.GetStudents().Find(a=>a.email.Trim()==email.Trim()&&a.Pass.Trim()==Pass.Trim()));
        }
         
        public bool Update(StudentDTO studentDTO)
        {
            return StudentDAL.Update(Converter.StudentConverter.ConvertTODTO(studentDTO));
        }
        public bool Remove(StudentDTO studentDTO)
        {
            return StudentDAL.Remove(Converter.StudentConverter.ConvertTODTO(studentDTO));
        }
        public bool UpdateStudent(StudentDTO studentDTO)
        {
            return StudentDAL.Update(Converter.StudentConverter.ConvertTODTO(studentDTO));
        }
        public List<ClasseDTO> GetClasse()
        {
            return Converter.ClassesConverter.ConverttoDTOall(ClassesDAL.GetClasse());
        }
    }
}
