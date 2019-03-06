import { FormTemplateComponent } from './formTemplates/formTemplate.component';
import { Component } from '@angular/core';


@Component({
  selector: 'fb-root',
  template: 
  `
  <div><h1>{{pageTitle}}</h1>
  <fb-formTemplates></fb-formTemplates>
  </div>
  `  
})

export class AppComponent{
    pageTitle: string = 'Form Builder';
}