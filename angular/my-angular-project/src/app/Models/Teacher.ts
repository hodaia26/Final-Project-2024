export class Teacher
{
    constructor(
      public  Idteacher:number,public adresse:string,public name:string,public lastName:string,public NameClass:string,public email:string,public pass:string,
      public Matiere:string,public Genre:string,public Description:string,public Ville:string,public Prix:string,public Statut:string,public Image:string 
      )
    {
      this.Idteacher=Idteacher;
      this.adresse=adresse;
      this.name=name;
      this.lastName=lastName;
     this.NameClass=NameClass;
      this.email=email;
      this.pass=pass; 
      this.Matiere=Matiere;  
      this.Genre=Genre;
      this.Description=Description;
      this.Ville=Ville;
      this.Prix=Prix; 
      this.Statut=Statut; 
      this.Image=Image; 
    }
}
