﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL;
using DTO;

namespace BLL
{
    public class GenreBLL
    {
        GenreDAL GenreDAL = new GenreDAL();


        public List<GenreDTO> GetGenre()
        {
            return Converter.GenreConverter.ConverttoDTOall(GenreDAL.GetGenre());
        }
        
    }
}
