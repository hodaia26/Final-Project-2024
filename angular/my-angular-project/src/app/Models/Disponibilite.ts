export class Disponibilite
{
    constructor(
      public  IdDisponibilite:number,public dateend:Date, public DateStart:Date, public IdTeacher:number
      )
    {
      this.IdDisponibilite=IdDisponibilite;
      this.DateStart=DateStart;
      this.dateend=dateend;
      this.IdTeacher=IdTeacher;
    }
}
