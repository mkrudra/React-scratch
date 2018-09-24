import React from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoginRoot from './LoginRoot';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
   this.onLoginSubmit = this.onLoginSubmit.bind(this);
    //this.props.loginResetStore();
  }

  componentWillMount() {
    if (this.props.isAuthenticated) {
      this.context.router.push("/");
    }
  }



  componentWillReceiveProps(nextProps) {
    // if isAuthenticated is true, then token must be present
    //console.log('nextProps.isAuthenticated: ', nextProps.isAuthenticated);
    if (nextProps.isAuthenticated) {
      /*
      * RESET STORE PARAMS ON SUCCESSFUL 1 or 2 FACTOR LOGIN
      * like isLoggingIn, isOtpValidating, isOtpValidated etc
      * except isAuthenticated and user profile
      */
      // this.props.loginResetStore();
      this.context.router.push('/');
    }
  }

  onLoginSubmit(data) {

    const params = {
      username: data.username,
      password: data.password,
      userType: 'EXECUTIVE',
    };

   // this.props.loginRequest(params);
  }



  render() {
    if (this.props.userData != null) {
      localStorage.setItem("agentName", JSON.stringify(this.props.userData.username));
      localStorage.setItem("agentId", JSON.stringify(this.props.userData.userId));
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <LoginRoot
              isLoginFormSubmitting={this.props.isLoginFormSubmitting}
              onLoginSubmit={this.onLoginSubmit}
            />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}


LoginPage.propTypes = {
  isLoginFormSubmitting: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  userData: PropTypes.object
};

LoginPage.contextTypes = {
  router: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { loginUser } = state;
  return {
    isLoginFormSubmitting: loginUser.isLoggingIn,
    isLoggedIn: loginUser.isLoggedIn,
    isAuthenticated: loginUser.isAuthenticated,
    userData: loginUser.userData,
  };
}

export default LoginPage;
