import { takeEvery, put } from "redux-saga/effects";
import { onBookListAsynAction, onBookListAsignAction } from "../actions/book.action";

export function* getBooKLisst() {
    const data = yield fetch('/bookList').then((response: Response) => response.body).then((data: any) => {
        return [{name: '炸死你三'}];
    });
    yield put({...onBookListAsignAction , books: data});
}

export function* watchBooKListAsync() {
    yield takeEvery(onBookListAsynAction.type, getBooKLisst);
}