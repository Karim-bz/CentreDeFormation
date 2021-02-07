import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainingsService } from '../service/trainings.service';

@Component({
  selector: 'app-detail-training',
  templateUrl: './detail-training.component.html',
  styleUrls: ['./detail-training.component.css']
})
export class DetailTrainingComponent implements OnInit {
  training: any;

  constructor(private route:ActivatedRoute,private service: TrainingsService) { }

  getColor(level) { 
    switch (level) {
      case 'Débutant':
        return 'green';
      case 'Intermédiaire':
        return 'orange';
      case 'Avancée':
        return 'red';
    }
  }

  ngOnInit(): void {
    let idTraining = this.route.snapshot.params.id;

    this.service.getOneTraining(idTraining).subscribe(res=>{
      this.training = res;
      console.log(res);
    });
  }

}
