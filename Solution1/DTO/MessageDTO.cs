using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class MessageDTO
    {
        public int IdMessage { get; set; }
        public string Date { get; set; }
        public string Texte { get; set; }
        public int IdFrom { get; set; }
        public int IdTo { get; set; }
        public string TypeFrom { get; set; }
        public string Time { get; set; }
    }
}
