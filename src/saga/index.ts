import { all } from 'redux-saga/effects'
import { watchIncrementAsync, incrementAsync, increment, decrement } from './count.saga';
import { watchBooKListAsync } from './book.saga';
const countList = [
    incrementAsync(),
    watchIncrementAsync(),
    increment(),
    decrement()
];

const BookList = [
    watchBooKListAsync()
]
export default function* rootSaga() {
    yield all([
        ...countList,
        ...BookList
    ])
}