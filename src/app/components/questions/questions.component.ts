import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { FormControl, FormGroup } from '@angular/forms';
import { answerType } from 'src/app/questioninterface';
import * as _ from "lodash";
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input() question!: any
  constructor(private TaskService: TaskService, private snackBar: MatSnackBar) { }
  // questionList: any
  questionForm!: FormGroup
  answerType = answerType
  topic!: string;
  time!: number;
  defaultBasis!: string


  ngOnInit(): void {

    this.defaultBasis = this.answerType[0]
    this.questionForm = new FormGroup({
      'basisType': new FormControl(this.defaultBasis)

    })

  }


  submitAnswer(userAnswer: any) {

    const map = {};
    let correctAnswer = this.answerTypeCheck(this.defaultBasis.toLowerCase())

    correctAnswer.sort((a: any, b: any) => (a.when.localeCompare(b.when) || a.type.localeCompare(b.type)))

    userAnswer.sort((a: any, b: any) => (a.when.localeCompare(b.when) || a.type.localeCompare(b.type)))

    if (_.isEqual(correctAnswer, userAnswer)) {
      let msg = "You are Correct!"
      let action = "Dismiss"
      this.snackBar.open(msg, action, { duration: 4500 });
    }
    else {
      let msg = "Incorrect answer. Try again!"
      let action = "Dismiss"
      this.snackBar.open(msg, action, { duration: 4500 });
    }

  }

  answerTypeCheck(userAnswerType: string) {
    for (let answer of this.question.correct_answers) {
      if (answer.type == userAnswerType) {

        return answer.entries
      }

    }
  }

}


