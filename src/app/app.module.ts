import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material/material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionSpaceComponent } from './components/question-space/question-space.component';
import { QuestionRowComponent } from './components/question-row/question-row.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionSpaceComponent,
    QuestionRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
