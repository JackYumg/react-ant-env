import React, { PureComponent } from "react";
import { Button } from 'antd';
import { onIncrementAction, onDecrementAction, onIncrementAsyncAction } from "../../actions/count.actions";
import { connect } from "react-redux";
interface CountProps {
    onIncrement?: React.MouseEventHandler;
    value?: number;
    onDecrement?: React.MouseEventHandler;
    onIncrementAsync?: React.MouseEventHandler
}

// export const Count = ({ onIncrement, onDecrement, onIncrementAsync, value }: CountProps) => {
//     return (
//         <div>
//             <Button onClick={onIncrementAsync}>一秒后加上</Button>
//             {' '}
//             <Button onClick={onIncrement}>+</Button>
//             {' '}
//             <Button onClick={onDecrement}>-</Button>
//             <hr />
//             <div>点击了: {value} 次</div>
//         </div>
//     )
// }
export class Count extends PureComponent<CountProps> {
    render() {
        return (
            <div>
                <Button onClick={this.props.onIncrementAsync}>一秒后加上</Button>
                {' '}
                <Button onClick={this.props.onIncrement}>+</Button>
                {' '}
                <Button onClick={this.props.onDecrement}>-</Button>
                <hr />
                <div>点击了: {this.props.value} 次</div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    onIncrement: () => onIncrementAction,
    onDecrement: () => onDecrementAction,
    onIncrementAsync: () => onIncrementAsyncAction
}

export default connect(null, mapDispatchToProps)(Count);