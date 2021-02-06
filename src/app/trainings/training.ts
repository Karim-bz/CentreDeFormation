export class Training {

    constructor(
      public id: number,
      public titre: string,
      public description: string,
      public chargeHoraire: number,
      public formateur: string,
      public tagsList: string,
      public sessionsList: string,
      public pdfFile: File,
      public level: File
    ) {  }
  
  }