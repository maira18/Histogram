import React from 'react';
import Frequency from './Frequency'
class ActionButton extends React.Component{
    handleClick(e) {
        this.props.callBack();
    }
    render() {
        return <button onClick={(e) => this.handleClick(e)} className="btn btn-dark action-button" style={{marginTop:'60px'}}><span>{this.props.text}</span></button>
    }
}
export default ActionButton;