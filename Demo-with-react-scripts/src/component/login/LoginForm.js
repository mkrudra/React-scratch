import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from '../../utils/common';
import { TextField, Button } from '../common/Input';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {
        username: null,
        password: null,
      },
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.removeErrorMsg = this.removeErrorMsg.bind(this);
  }

  inputChangedHandler = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onFormSubmit() {
    const formData = {
      username: this.state.username,
      password: this.state.password,
    };
    
    if (this.validateInput(formData)) {
      console.log(formData);
      this.props.onLoginSubmit(formData);
    }
  }

  validateInput(data) {
    console.log(data);
    if (isEmpty(data.username)) {
      this.setState({ errors: { username: 'Username is required!' } });
      return false;
    }
    if (isEmpty(data.password)) {
      this.setState({ errors: { password: 'Password is required!' } });
      return false;
    }

    return true;
  }

  removeErrorMsg() {
    this.setState({ errors: { username: null, password: null } });
  }

  render() {
    const { username, password } = this.state;   

    return (
      
      <div className="fab-card mt-5">
        <div className="card-header">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <div className="form-group">
            <TextField
              value={username}
              name="username"
              onChange={this.inputChangedHandler}
              placeholder="User Name"
            />
            <p className="field-error">{this.state.errors.username}</p>
          </div>
          <div className="form-group mt-5">
            <TextField
              value={password}
              type="text"
              name="password"
              onChange={this.inputChangedHandler}
              placeholder="Password"
            />
            <p className="field-error">{this.state.errors.password}</p>
          </div>
          <Button className="fab-btn mt-2 w-100" value="LOGIN" onClick={this.onFormSubmit} />
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLoginSubmit: PropTypes.func.isRequired,
  isFormSubmitting: PropTypes.bool,
};

export default LoginForm;
