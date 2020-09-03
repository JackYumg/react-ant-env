import { delay, put, takeEvery } from "redux-saga/effects";
import { onIncrementAction, onDecrementAction, onIncrementAsyncAction } from "../actions/count.actions";

export function* incrementAsync() {
    yield delay(1000)
    yield put(onIncrementAction)
}

export function* increment() {
    yield put(onIncrementAction)
}

export function* decrement() {
    yield put(onDecrementAction)
}

export function* watchIncrementAsync() {
    yield takeEvery(onIncrementAsyncAction.type, incrementAsync)
}