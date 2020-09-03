import { onBookListAsignAction, BookListAction } from "../actions/book.action";

export interface BookState {
    books: any[]
}

export const bookState: BookState = {
    books: []
}
export const bookRedcuer = (state: BookState = bookState, action: BookListAction) => {
    switch (action.type) {
        case onBookListAsignAction.type:
            state.books = action.books || [];
            return state;
    }
    return state;
}