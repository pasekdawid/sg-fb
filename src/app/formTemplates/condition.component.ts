import { FormGroup } from '@angular/forms';
import { ConditionType } from './ConditionType';
import { Component } from '@angular/core';


@Component({
    selector: 'fb-condition',
    templateUrl: './condition.component.html',
    styleUrls: ['./condition.component.css']
})

export class ConditionComponent{    
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