using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class feedbackDTO
    {
        public int IdfeedBack { get; set; }
        public int idStudent { get; set; }
        public int idTeacher { get; set; }
        public string point { get; set; }
        public string remark { get; set; }

    }
}
