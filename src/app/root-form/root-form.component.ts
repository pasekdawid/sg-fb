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

        this.load();

        this.rootForm.valueChanges.subscribe(value=>
            console.log(JSON.stringify(value), this.save()));
    }

    save(){
        console.log('saving..');
        //TODO
    }

    load(){
        console.log('loading..');
        //TODO
    }

    addSub(i: number){ //                           ;(
        // this.formContainer.setControl(3, 
        //         this.rootForm = this.fb.group({
        //         formContainer: this.fb.array([this.buildContainer()])
        //     })      
        // );
        this.rootForm.setControl('container', this.fb.array([this.buildContainer()])); 
    
        console.log('addSub..' + i); 
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
            type: '',
            childForm: this.fb.array([])
        })
    }

    addForm(): void{
        this.formContainer.push(this.buildContainer());
    }
}