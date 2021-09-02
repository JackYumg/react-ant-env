import { takeEvery, put } from "redux-saga/effects";
import { onBookListAsynAction, onBookListAsignAction } from "../actions/book.action";

export function* getBooKLisst() {
    const data = yield fetch('http://localhost:3000/book/bookList').then((response: Response) => { console.log(response);return response.body}).then((data: any) => {
        return [{name: '炸死你三'}];
    });
    yield put({...onBookListAsignAction , books: data});
}

export function* watchBooKListAsync() {
    yield takeEvery(onBookListAsynAction.type, getBooKLisst);
}