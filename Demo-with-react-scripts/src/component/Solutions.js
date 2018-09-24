import React from 'react';
import { connect } from 'react-redux';
import { userRequest,userReset } from './../actions/userAction';
import Child from './Child';

class Solutions extends React.Component {

  state = {
      userdata:null
  }
  componentDidMount() { 
    this.props.userRequest('/users');    
  } 
componentWillReceiveProps(nextProps){
  console.log("nextProps = ", nextProps);
  this.setState({
    userdata:nextProps.userData
  })
}
  render() {
    console.log("this.state.userdata = ", this.state.userdata);
    return (
      <div>
        My Solutions...
        { this.state.userdata ? 
          <Child childData={this.props.userData}/>
          :'Loading...'
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('state data',state);
  return ({
    isLoading: state.userData.isLoading,
    isLoaded: state.userData.isLoaded,
    userData: state.userData.userData
  });
}

export default connect(mapStateToProps, {
  userRequest,userReset
})(Solutions);