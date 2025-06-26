import { Component } from '@angular/core';
import { FormComponent as Form } from '../../components/form/form.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    Form
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

}
