import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';








const material = [
  FormsModule,
  MatFormFieldModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatStepperModule,
  MatCardModule,
  MatSnackBarModule,
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
