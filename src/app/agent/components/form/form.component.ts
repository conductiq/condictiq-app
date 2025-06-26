import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Agent } from '../../services/agent.service';

import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-agent-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  form: FormGroup;

  constructor(
    private readonly fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      background: new FormControl('', [Validators.required]),
      goal: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
      model: new FormControl('', [Validators.required]),
      url: new FormControl('http://localhost:11434', [Validators.required])
    })
  }


  save() {
    if (this.form.invalid) {
      return;
    }
    const agent: Agent = {
      name: this.form.get('name')!.value,
      background: this.form.get('background')!.value,
      description: this.form.get('description')!.value,
      goal: this.form.get('goal')!.value,
      role: this.form.get('role')!.value,
      type: 'OLLAMA',
      tools: [],
      options: {
          model: this.form.get('model')!.value,
          url: this.form.get('url')!.value
      }
    }
  }
}
