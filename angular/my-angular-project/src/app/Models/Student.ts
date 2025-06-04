export class Student
{
    constructor(
      public  Idstudent:number,public adresse:string,public name:string,public lastName:string,public NameClass:string,public email:string,public Pass:string
    )
    {
        this.Idstudent=Idstudent;
        this.adresse=adresse;
        this.name=name;
        this.lastName=lastName;
        this.NameClass=NameClass;
        this.email=email;
        this.Pass=Pass;
    }
}