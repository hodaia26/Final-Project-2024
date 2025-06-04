using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public  class CourseToStudentDetail
    {
        public CoursimDTO Coursim { get; set; }
        public SubjectOfCoursimDTO Subject { get; set; }
        public TeacherDTO Teacher { get; set; }
        public StudentInCourseDTO studentInCourse { get; set; }
    }
}
