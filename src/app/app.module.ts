import { FormTemplateComponent } from './formTemplates/formTemplate.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[
        AppComponent,
        FormTemplateComponent
    ],
    imports:[
        BrowserModule
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule { }