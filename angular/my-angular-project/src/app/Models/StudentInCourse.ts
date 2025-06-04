export class StudentInCourse
{
    constructor(
      public  idStudent:number,public IdStudentInCourse:number,public IdCourse:number,public ClassStart:Date,public ClassEnd:string,public Units:number,
      public StudentName:string,public StudentLastName:string,public NameClass:string,public Domaine:string,public Subject:string,public Type:string,public Statut:string,public Date:string
    )
    {
        this.idStudent=idStudent;
      
        this.IdStudentInCourse=IdStudentInCourse;
        this.IdCourse=IdCourse;

        this.NameClass=NameClass;
        this.StudentLastName=StudentLastName;
        this.StudentName=StudentName;
        this.Domaine=Domaine;
        this.Subject=Subject;
        this.ClassStart=ClassStart;
        this.ClassEnd=ClassEnd;
        this.Units=Units;
        this.Type=Type;
        this.Statut=Statut;
        this.Date=Date;
    }
}
