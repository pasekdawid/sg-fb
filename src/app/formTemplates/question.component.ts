import { ConditionType } from './ConditionType';
import { Component } from '@angular/core';


@Component({
    selector: 'fb-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent{
    questionString: string = 'Enter your question here';
    
    conditionType: ConditionType = ConditionType.RadioEquals;
    conditionValue: any;

    anyConditionType: boolean = 
    this.conditionType == ConditionType.None ? false : true;

    textConditionType: boolean = 
    this.conditionType == ConditionType.TextEquals ? true : false;

    numberConditionType: boolean = (
    this.conditionType == ConditionType.NumberEquals ||
    this.conditionType == ConditionType.NumberGreaterThan ||
    this.conditionType == ConditionType.NumberLessThan) ? true : false;

    radioConditionType: boolean = 
    this.conditionType == ConditionType.RadioEquals ? true : false;
}