import { Action } from "redux"
import { onDecrementAction, onIncrementAction } from "../actions/count.actions"

export interface CountState {
    count: number
}

export const countState: CountState = {
    count: 0
}
export const countRedcuer = (state: CountState = countState, action: Action) => {
    switch (action.type) {
        case onIncrementAction.type:
            state.count += 1;
            return state;
        case onDecrementAction.type:
            state.count -= 1;
            return state;
    }
    return state;
}