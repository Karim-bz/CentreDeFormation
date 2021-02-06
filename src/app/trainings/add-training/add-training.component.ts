import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { TrainingsService } from '../service/trainings.service';
import { Training } from '../training';

@Component({
  selector: 'app-add-training',
  templateUrl: './add-training.component.html',
  styleUrls: ['./add-training.component.css']
})
export class AddTrainingComponent implements OnInit {
  trainingForm: FormGroup;
  sessionList: FormArray;
  tagList: FormArray;
  fileToUpload: File = null;
  levels: string[] = ['Débutant', 'Intermédiaire', 'Avancée'];
  constructor(private fb: FormBuilder, private service:TrainingsService) { }

  minDate= new Date();
  maxDate= new Date().setDate(2);

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm(){
    this.trainingForm = this.fb.group({
      trainingTitreCtrl: ['', Validators.required],
      trainingDescriptionCtrl: ['', Validators.required],
      trainingChargeHoraireCtrl: ['', Validators.required],
      trainingFormateurCtrl: ['', Validators.required],
      // trainingFileCtrl: ['', Validators.required],
      trainingLevelCtrl: ['', Validators.required],
      trainingTagsCtrl: this.fb.array([this.createTag()]),
      trainingSessionsCtrl: this.fb.array([this.createSession()])

      // title: new FormControl('', [Validators.required]),
      // description: new FormControl('', [Validators.required]),
      // chargeHoraire: new FormControl('', [Validators.required]),
      // formateur: new FormControl('', [Validators.required]),
      // // file: '',
      // level: new FormControl('', [Validators.required]),
      // tags: this.fb.array([this.createTag()]),
      // sessions: this.fb.array([this.createSession()])
    });
    this.tagList = this.trainingForm.get('trainingTagsCtrl') as FormArray;
    this.sessionList = this.trainingForm.get('trainingSessionsCtrl') as FormArray;
  }

  selectLevel(event) {
    this.trainingForm.patchValue({
      level: event.target.value
    })
    // console.log(event.target.value);
  }

  // File Input
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }


  //Create Session FormGroup
  createSession(): FormGroup {
    return this.fb.group({
      name: new FormControl(null, [Validators.required]),
      startDate: new FormControl(null, [Validators.required]),
      endDate: new FormControl(null, [Validators.required]),
    });
  }
  //add Session FormGroup
  addSession(): void{
    this.sessionList.push(this.createSession());
  }
  //remove Session FormGroup
  removeSession(index: number): void{
    this.sessionList.removeAt(index);
  }
  get sessionFormGroup(): FormArray {
    return this.trainingForm.get('trainingSessionsCtrl') as FormArray;
  }


  //Create Tag FormGroup
  createTag(): FormGroup {
    return this.fb.group({
      nameTag: new FormControl(null, [Validators.required]),
    });
  }
  //add Tag FormGroup
  addTag(): void{
    this.tagList.push(this.createTag());
  }
  //remove Tag FormGroup
  removeTag(index: number): void{
    this.tagList.removeAt(index);
  }
  get tagFormGroup(): FormArray {
    return this.trainingForm.get('trainingTagsCtrl') as FormArray;
  }


  //Submit Form
  onSubmit(): void {
    const training = {} as Training;

    training.id = 1;
    training.titre = this.trainingForm.get('trainingTitreCtrl').value;
    training.description = this.trainingForm.get('trainingDescriptionCtrl').value;
    training.chargeHoraire = this.trainingForm.get('trainingChargeHoraireCtrl').value;
    training.formateur = this.trainingForm.get('trainingFormateurCtrl').value;
    // training.pdfFile = this.trainingForm.get('trainingFileCtrl').value;
    training.level = this.trainingForm.get('trainingLevelCtrl').value;
    training.tagsList = this.trainingForm.get('trainingTagsCtrl').value;
    training.sessionsList = this.trainingForm.get('trainingSessionsCtrl').value;

    // console.log(training);
    this.service.createTraining(training).then(res => {
      console.log(res);
      alert("thanks for adding");
    }).catch(error => {
      console.log('this is the error:',error);
    })
  }

}
