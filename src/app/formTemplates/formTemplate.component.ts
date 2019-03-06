import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
    selector: 'fb-formTemplates',
    templateUrl: './formTemplate.component.html',
    styleUrls: ['./formTemplate.component.css']
})

export class FormTemplateComponent{
    addString: string = 'Add Sub-input';
    deleteString: string = 'Delete';
    childForms: FormGroup[]; 
}