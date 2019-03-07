import { FormData } from './FormData';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root-form',
    templateUrl: './root-form.component.html',
    styleUrls: ['./root-form.component.css']
})

export class RootFormComponent implements OnInit{
    rootForm: FormGroup;
    data = new FormData();

    constructor(private fb: FormBuilder) {
        this.rootForm = this.fb.group({
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
        });
    }

    

    ngOnInit(): void {
        console.log('start..');
        
        // LOAD TODO

        this.rootForm.valueChanges.subscribe(value=>
            console.log(JSON.stringify(value)));

        // SAVE TODO
    }

    save(){
        console.log('saving..');
    }

    add(){
        console.log('add..');
    }

    addSub(){
        console.log('addSub..');
    }

    delete(){
        console.log('delete..');
    }
}