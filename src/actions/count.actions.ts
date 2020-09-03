import { Action } from "redux";
export class CountAction implements Action {
    type: any;
    count?= 0;
}
export const onIncrementAction: CountAction = { type: 'INCREMENT' };
export const onDecrementAction: CountAction = { type: 'DECREMENT' };
export const onIncrementAsyncAction: CountAction = { type: 'INCREMENT_ASYNC' };