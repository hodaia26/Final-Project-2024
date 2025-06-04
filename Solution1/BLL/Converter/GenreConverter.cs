using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL.Converter
{
    public class GenreConverter
    {
        public static GenreDTO ConvertTdODTO(Genre G)
        {
            return new GenreDTO()
            {
               IdGenre=G.IdGenre,
               Genre1=G.Genre1,
               

            };

        }

        public static List<GenreDTO> ConverttoDTOall(List<Genre> q)
        {
            return q.Select(a => ConvertTdODTO(a)).ToList();
        }

        public static Genre ConvertTODTO(GenreDTO GenreDTOO)
        {
            return new Genre()
            {
              IdGenre= GenreDTOO.IdGenre,
              Genre1=GenreDTOO.Genre1,

            };

        }
        public static List<Genre> ConverttoDTOall(List<GenreDTO> q)
        {
            return (q.Select(a => ConvertTODTO(a)).ToList());
        }
    }
}

