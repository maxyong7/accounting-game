import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-question-space',
  templateUrl: './question-space.component.html',
  styleUrls: ['./question-space.component.css']
})
export class QuestionSpaceComponent implements OnInit {

  constructor(private TaskService: TaskService) { }
  questionList: any

  ngOnInit(): void {

    this.TaskService.getQuestions().subscribe((value) => this.questionList = value)
  }

}
