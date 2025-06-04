export class CoursimOfTeacher
{
    constructor(
      public  IdCoursimOfTeacher:number,
      public IdTeacher:number,
      public Matiere:string,
      public NameClassStart:string,
      public NameClassEnd:string,
      public prix:number,

      public adresse:string,
      public name:string,
      public lastName:string,
      public NameClass:string,
      public Genre:string,
      public Description:string,
      public Ville:string,
      public Prix:string,
      public Image:string,

      )
    {
      this.IdCoursimOfTeacher=IdCoursimOfTeacher;
      this.IdTeacher=IdTeacher;
      this.Matiere=Matiere;
      this.NameClassStart=NameClassStart;
      this.NameClassEnd=NameClassEnd;
     this.prix=prix;

     this.adresse=adresse,
     this.name=name,
     this.lastName=lastName,
     this.NameClass=NameClass,
     this.Genre=Genre,
     this.Description=Description,
     this.Ville=Ville,
     this.Prix=Prix,
     this.Image=Image


    }
}

