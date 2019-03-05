import { Type } from './Type';
import { NumberCondition } from './NumberCondition';


export interface IForm{
    parentId?: number,
    formId: number,
    question: string,
    answerType: Type
}

export interface IParentTextForm extends IForm{
    condition: string,
    answer: string
}

export interface IParentNumberForm extends IForm{
    condition: NumberCondition,
    answer: number
}

export interface IParentRadioForm extends IForm{
    condition: string,
    answer: boolean
}

