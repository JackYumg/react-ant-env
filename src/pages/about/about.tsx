import React, { Component } from "react";
import Book from "../../compoents/book/book";
import { rootStore } from "../../store";

export class About extends Component {
    render() {
        return (
            <div>
                <Book></Book>
                <span>
                    {rootStore.getState().bookRedcuer.books.map((e: any, index: string) => <div key={index}>{e.name}</div>)}
                </span>
            </div>
        )
    }
}