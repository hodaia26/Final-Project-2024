using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class StudentInCourseDTO
    {
        public int IdStudentInCourse { get; set; }
        public int idStudent { get; set; }
        public int IdCourse { get; set; }
        public string ClassStart { get; set; }
        public string ClassEnd { get; set; }
        public int Units { get; set; }
        public string Type { get; set; }
        public string Statut { get; set; }
        public string StudentName { get; set; }
        public string StudentLastName { get; set; }
        public string NameClass { get; set; }
        public string Domaine { get; set; }
        public string Subject { get; set; }
        public string Date { get; set; }

        public bool Pay { get; set; }
        public bool StatusTeacher { get; set; }
        public System.DateTime DateStart { get; set; }
        public System.DateTime Dateend { get; set; }

    }
}
