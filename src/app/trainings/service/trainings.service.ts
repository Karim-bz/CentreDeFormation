import { Injectable } from '@angular/core';
import { Training } from 'src/app/trainings/Model/training';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class TrainingsService {

  constructor(private firestore: AngularFirestore) { }

  getTrainings() {
    return this.firestore.collection('Trainings').snapshotChanges();
  }

  getOneTraining(training_Id) {
    return this.firestore.collection('Trainings').doc(training_Id).valueChanges();
  }

  createTraining(training: Training){
    return this.firestore.collection('Trainings').add(training);
  }

  updateTraining(training: Training){
    delete training.id;
    this.firestore.doc('Trainings/' + training.id).update(training);
  }

  deleteTraining(training_Id: string){
    this.firestore.doc('Trainings/' + training_Id).delete();
  }
}
