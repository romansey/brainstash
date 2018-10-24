import React from 'react';

export default class CreateForm extends React.Component {

    constructor() {
        super();
        this.state = {
            inputValue: ''
        }
    }

    onInputChanged(e) {
        this.setState(Object.assign({}, this.state, {inputValue: e.target.value}));
    }

    onInputKeyUp(e) {
        if (e.keyCode === 13) {
            this.submit();
        }
    }

    submit() {
        if (this.state.inputValue.length > 0) {
            this.props.onSubmit(this.state.inputValue);
            this.setState(Object.assign({}, this.state, {inputValue: ''}));
        }
    }

    render() {
        return <div className="form-create">
            <input type="text" placeholder={this.props.inputPlaceholder} title={this.props.tooltip}
                value={this.state.inputValue}
                onChange={this.onInputChanged.bind(this)}
                onKeyUp={this.onInputKeyUp.bind(this)} />
            <button disabled={this.state.inputValue.length === 0} onClick={this.submit.bind(this)}>{this.props.buttonLabel}</button>
        </div>;
    }

}
