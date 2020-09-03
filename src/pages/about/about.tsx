import React, { Component } from "react";
import { Button } from "antd";
import { rootStore } from "../../store";
import { onBookListAsynAction } from "../../actions/book.action";

export class About extends Component {
    getBookList() {
        rootStore.dispatch(onBookListAsynAction);
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.getBookList}>查看信息</Button>
                {
                    rootStore.getState().bookRedcuer.books.forEach((e: any) => {
                        return <div>{e.name}</div>
                    })
                }
            </div>
        )
    }
}