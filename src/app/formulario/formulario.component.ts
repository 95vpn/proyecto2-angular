import { AsyncPipe, CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe, AsyncPipe],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss'
})
export class FormularioComponent {

  form = new FormGroup({
    name : new FormControl('', [Validators.minLength(4), Validators.required]),
    isChecked : new FormControl(false)
  });
  

  
}
