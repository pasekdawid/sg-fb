import { FormGroup } from '@angular/forms';
import { FormTemplateComponent } from './formTemplates/formTemplate.component';
import { Component } from '@angular/core';


@Component({
  selector: 'fb-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
    pageTitle: string = 'Form Builder';
    addString: string = 'Add Input';
    formContainer: FormGroup[];
}