import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://reclique.github.io/web-dev-testing/1_accounting_game/questions.json'
  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl)
  }
}
