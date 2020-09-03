import { Action } from "redux";
export class BookListAction implements Action {
    type: any;
    books?: any[] = [];
}

export const onBookListAsynAction: BookListAction = { type: 'BookListAsync' };
export const onBookListAsignAction: BookListAction = { type: 'BookListAsign', books: [] };

