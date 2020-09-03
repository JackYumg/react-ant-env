import React, { Component } from "react"
import { Button } from "antd"
import { rootStore } from "../../store"
import { onBookListAsynAction } from "../../actions/book.action"

export default class Book extends Component {

    dispalyInfos() : void {
        rootStore.dispatch(onBookListAsynAction)
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.dispalyInfos}>查看信息</Button>
            </div>
        )
    }
}