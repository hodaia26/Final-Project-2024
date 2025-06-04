using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data.Entity;
using DTO;

namespace DAL
{
    public class SicoumProDB: DbContext
    {
        public DbSet<student> student { get; set; }

        public DbSet<teacher> teacher { get; set; }

        public DbSet<Classes> Classes { get; set; }

        public DbSet<Domain> Domain { get; set; }

        public DbSet<Feedback> Feedback { get; set; }

        public DbSet<StudentInCourse> StudentInCourse { get; set; }

        public DbSet<SubjectOfCoursim> SubjectOfCoursim { get; set; }

        public DbSet<TimesOfCourse> TimesOfCourse { get; set; }

        public DbSet<coursim> coursim { get; set; }


    }
}
