import React from 'react';
import { removeGeneralMessage } from '../../actions/common.js';

class SuccessOrErrorMessage extends React.Component {
    constructor(props) {
        super(props);
        this.closeErrorOrSuccessMessage = this.closeErrorOrSuccessMessage.bind(this);
    }
     closeErrorOrSuccessMessage() {
        const { dispatch } = this.props;
        dispatch(removeGeneralMessage());

    }
    render() {
        const { generalMessage } = this.props;
        var classname = 'message-default';
        var msgType = '';
        if (!generalMessage.success) {
            msgType = 'Error Message';
            classname = 'message-error';
        } else {
            msgType = 'Success Message'
            classname = 'message-success';
        }
        return (
            <div className={classname} >
                <div className="message-type">{msgType}</div>
                <div className="message-text">{generalMessage.msg}</div>
                <a className="close-message" onClick={this.closeErrorOrSuccessMessage}></a>
            </div>
        );
    };
}

SuccessOrErrorMessage.propTypes = {
    generalMessage: React.PropTypes.object.isRequired,
    // dispatch: React.PropTypes.func.isRequired

}


export default SuccessOrErrorMessage;