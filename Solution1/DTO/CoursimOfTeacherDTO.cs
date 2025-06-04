using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class CoursimOfTeacherDTO
    {
        public int IdCoursimOfTeacher { get; set; }
        public int IdTeacher { get; set; }
        public string Matiere { get; set; }
        public string NameClassStart { get; set; }
        public string NameClassEnd { get; set; }

        //price:
        public int prix { get; set; }


        public string adresse { get; set; }
        public string name { get; set; }
        public string lastName { get; set; }
        public string NameClass { get; set; }
        public string Genre { get; set; }
        public string Description { get; set; }
        public string Ville { get; set; }
        public string Prix { get; set; }
        public string Image { get; set; }

    }
}
