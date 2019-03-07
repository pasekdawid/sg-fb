import { ConditionType } from './ConditionType';

export class FormData{
    constructor(
        public question = '',
        public type = '',
        public condition = '',
        public value = ''
    ){ } 
}