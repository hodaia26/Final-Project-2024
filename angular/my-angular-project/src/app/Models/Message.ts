export class Message
{
    constructor(
      public  IdMessage:number,public Texte:string,public  IdFrom:number,public  IdTo:number, public TypeFrom:string, public TypeTo:string, 
      public Date:string, public Time:string
      )
    {
      this.IdMessage=IdMessage;
      this.Texte=Texte;
      this.IdFrom=IdFrom;
      this.IdTo=IdTo;
      this.TypeFrom=TypeFrom;
      this.TypeTo=TypeTo;
      this.Date=Date;
      this.Time=Time;

    }
}

