import { Injectable } from '@angular/core';
import { Training } from 'src/app/trainings/training';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private firestore: AngularFirestore) { }

  getTrainings() {
    return this.firestore.collection('Trainings').snapshotChanges();
  }

  createTraining(training: Training){
    return this.firestore.collection('Trainings').add(training);
  }

  updateTraining(training: Training){
    delete training.id;
    this.firestore.doc('trainings/' + training.id).update(training);
  }

  deleteTraining(trainingId: string){
    this.firestore.doc('trainings/' + trainingId).delete();
  }
}
