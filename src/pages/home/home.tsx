import React, { Component } from "react";
import { Count } from "../../compoents/count/count";
import { connect } from "react-redux";
import { rootStore } from "../../store";
import { onDecrementAction, onIncrementAction, onIncrementAsyncAction } from "../../actions/count.actions";

export class Home extends Component {

    constructor(props: any) {
        super(props);
        this.onDecrement = this.onDecrement.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onIncrementAsync = this.onIncrementAsync.bind(this);
    }
    private value = 2;
    onDecrement(args: any) {
        rootStore.dispatch(onDecrementAction);
    }

    onIncrement(args: any) {
        rootStore.dispatch(onIncrementAction);
    }

    onIncrementAsync(args: any) {
        rootStore.dispatch(onIncrementAsyncAction);
    }

    render() {
        return (
            <Count onDecrement={this.onDecrement} onIncrement={this.onIncrement} onIncrementAsync={this.onIncrementAsync} value={rootStore.getState().countRedcuer.count}></Count>
        )
    }
}

export default connect(null, {})(Home)