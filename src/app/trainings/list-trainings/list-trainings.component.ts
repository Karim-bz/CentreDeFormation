import { Component, OnInit } from '@angular/core';
import { TrainingsService } from '../service/trainings.service';
import { Training } from '../training';

@Component({
  selector: 'app-list-trainings',
  templateUrl: './list-trainings.component.html',
  styleUrls: ['./list-trainings.component.css']
})
export class ListTrainingsComponent implements OnInit {

  trainings: Training[];

  constructor(private service:TrainingsService) { }

  ngOnInit(): void {
  }

  deleteTraining(Training: Training): void {

  }

 editTraining(Training: Training): void {
    
  }

}
