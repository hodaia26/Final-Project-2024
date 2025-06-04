using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CoursimDTO
    {
        public int Idcourse { get; set; }
        public int idSubject { get; set; }
        public int IDTeacher { get; set; }
        public string classStart { get; set; }
        public string classEnd { get; set; }
        public int units { get; set; }
        public string Type { get; set; }
        public string Statut { get; set; }
        public string Date { get; set; }
        public string TeacherName { get; set; }
        public string TeacherLastName { get; set; }
        public string Subject { get; set; }
        public string Domaine { get; set; }
        public string NameClass { get; set; }
        public string NameClassStart { get; set; }
        public string NameClassEnd { get; set; }
    }
}
