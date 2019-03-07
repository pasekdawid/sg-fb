import { RootFormComponent } from './root-form/root-form.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations:[
        AppComponent,
        RootFormComponent,
    ],
    imports:[
        BrowserModule,
        FormsModule, 
        ReactiveFormsModule
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule { }