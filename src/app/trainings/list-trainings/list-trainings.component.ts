import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../service/trainings.service';
import { Training } from '../Model/training';

@Component({
  selector: 'app-list-trainings',
  templateUrl: './list-trainings.component.html',
  styleUrls: ['./list-trainings.component.css']
})
export class ListTrainingsComponent implements OnInit {

  training: any;

  constructor(private service:TrainingsService) { }

  ngOnInit(): void {
    this.service.getTrainings().subscribe(data => {
      this.training = data.map(e =>{
        return{
          id: e.payload.doc.id,
          titre: e.payload.doc.data()['titre'],
          description: e.payload.doc.data()['description'],
          chargeHoraire: e.payload.doc.data()['chargeHoraire'],
          formateur: e.payload.doc.data()['formateur'],
          tagsList: e.payload.doc.data()['tagsList'],
          sessionsList: e.payload.doc.data()['sessionsList'],
          pdfFile: e.payload.doc.data()['pdfFile'],
          level: e.payload.doc.data()['level'],
        };
      })
      console.log(this.training);
    })
  }

  deleteTraining(training_Id): void {
    this.service.deleteTraining(training_Id);
  }

 editTraining(Training: Training): void {
    
  }

}
