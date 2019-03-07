import { FormData } from './FormData';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
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
            condition: '',
            value: '',
            question: '',
            type: ''
        });
    }

    ngOnInit(): void {
        // this.rootForm = new FormGroup({
        //     condition: new FormControl(),
        //     question: new FormControl(),
        //     type: new FormControl(),
        //     value: new FormControl()
        // });
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