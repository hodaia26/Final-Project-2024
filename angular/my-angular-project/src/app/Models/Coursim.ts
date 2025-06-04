export class Coursim
{
    constructor(
      public  Idcourse:number,public idSubject:number,public IDTeacher:number,public classStart:string,public classEnd:string,public units:string,public Type:string,public Statut:string,  
      public TeacherName:string, public TeacherLastName:string,public NameClass:string,public Subject:string,public Domaine:string,public Date:string
      )
    {
      this.Idcourse=Idcourse;
      this.idSubject=idSubject;
      this.IDTeacher=IDTeacher;
      this.classStart=classStart;
      this.classEnd=classEnd;
      this.units=units; 
      this.Type=Type;
      this.Statut=Statut;  
      this.Date=Date;
      
      this.TeacherName=TeacherName;
      this.TeacherLastName=TeacherLastName; 
      this.NameClass=NameClass;  
      this.Subject=Subject;
      this.Domaine=Domaine; 
    }
}

