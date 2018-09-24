import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class LoginRoot extends React.Component {

  render() {

    return (
      <LoginForm
        isFormSubmitting={this.props.isLoginFormSubmitting}
        onLoginSubmit={this.props.onLoginSubmit}
      />
    );

  }
}

LoginRoot.propTypes = {
  isLoginFormSubmitting: PropTypes.bool,
  onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginRoot;
