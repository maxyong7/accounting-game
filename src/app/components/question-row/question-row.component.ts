import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { categoryList } from 'src/app/questioninterface';

@Component({
  selector: 'app-question-row',
  templateUrl: './question-row.component.html',
  styleUrls: ['./question-row.component.css']
})
export class QuestionRowComponent implements OnInit {
  @Input() answerRow!: any
  @Input() basisType!: any
  @Output() onSubmitAnswer = new EventEmitter
  categoryList = categoryList
  rowGroup!: FormGroup

  get inputRow() {
    return this.rowGroup.get('inputRow') as FormArray
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.addInputRow()
  }


  addInputRow() {

    this.rowGroup = this.fb.group(
      {
        inputRow: this.fb.array([])
      })



    for (let i of this.answerRow.entries) {
      this.inputRow.push(this.fb.group({
        when: this.fb.control(null, [Validators.required, Validators.pattern('^[0-9]+/[0-9]{2}$')]),
        type: this.fb.control(null, [Validators.required]),
        Dr: this.fb.control(null),
        Cr: this.fb.control(null),
      }))

    }



  }




  onSubmit() {

    //Remove key with null value
    for (let i of this.rowGroup.value.inputRow) {
      Object.keys(i).forEach(key => {
        if (i[key] === null) {
          delete i[key];
        }
      });
    }

    this.onSubmitAnswer.emit(this.rowGroup.value.inputRow)
  }

}
