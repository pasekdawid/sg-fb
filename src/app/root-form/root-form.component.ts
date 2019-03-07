import { FormData } from './FormData';
import { FormGroup, FormBuilder, FormArray} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root-form',
    templateUrl: './root-form.component.html',
    styleUrls: ['./root-form.component.css']
})

export class RootFormComponent implements OnInit{
    rootForm: FormGroup;
    data = new FormData();

    get formContainer(): FormArray{
        return <FormArray>this.rootForm.get('formContainer');
    }

    constructor(private fb: FormBuilder) {
      
    }

    ngOnInit(): void {
        console.log('start..');
        this.rootForm = this.fb.group({
            formContainer: this.fb.array([this.buildContainer()])
        })      

        // LOAD TODO

        this.rootForm.valueChanges.subscribe(value=>
            console.log(JSON.stringify(value)));

        // SAVE TODO
    }

    save(){
        console.log('saving..');
    }

    addSub(){
        console.log('addSub..');
    }

    delete(i: number): void{
        console.log('delete..');
        if (confirm("Are you sure you want to delete " + i + "?"))
        {
            this.formContainer.removeAt(i);
        }
    }

    buildContainer(): FormGroup{
        return this.fb.group({
            condition: {
                value: '',
                disabled: true
            },
            value: {
                value: '',
                disabled: true
            },
            question: '',
            type: ''
        })
    }

    addForm(): void{
        this.formContainer.push(this.buildContainer());
    }

}