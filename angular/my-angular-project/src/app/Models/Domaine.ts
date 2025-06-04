export class Domaine
{
  //mettre le mm noms dans les parentheses cm c est katouv ds le dto
    constructor(
      public  CodeDomaine:number,public domaineName:string)
    {
        this.CodeDomaine=CodeDomaine;
        this.domaineName=domaineName;
    }
}