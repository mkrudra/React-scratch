import React from 'react';
import { connect } from 'react-redux';
import { userSuccess } from './../actions/userAction';
import Child from './Child';
import API from '../utils/api';

class Home extends React.Component {

  state = {
      response: null
  }

  componentDidMount() {
    this.getData();
  }


  getData = () => {
    API.get('/users')
      .then(response => {
        this.setState({
          response: response
        })
      })
      .catch(error => {
        console.log("error = ", error);
      });
  }

  render() {
    return (
      <div>
        My Home...
        <Child childData={this.state.response}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userData } = state;
  console.log("state = ", userData);
  return {
    isLoading: userData.isLoading,
    isLoaded: userData.isLoaded
  };
}

export default connect(mapStateToProps, {
  userSuccess
})(Home);