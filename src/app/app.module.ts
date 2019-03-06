import { ConditionComponent } from './formTemplates/condition.component';
import { QuestionComponent } from './formTemplates/question.component';
import { FormTemplateComponent } from './formTemplates/formTemplate.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations:[
        AppComponent,
        FormTemplateComponent,
        QuestionComponent,
        ConditionComponent
    ],
    imports:[
        BrowserModule
    ],
    bootstrap:[
        AppComponent
    ]
})

export class AppModule { }