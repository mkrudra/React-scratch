import React from 'react';

import { connect } from 'react-redux';
import { userRequest,userReset } from './../actions/userAction';

class About extends React.Component {
  state = {
      response: null
  }

  componentDidMount() {
    this.props.userRequest('/photos');   
  }
  componentWillUnmount(){
    this.props.userReset()
  }

  render() {
    let mydata = null;
    if (this.props.userData != null) {
     mydata = this.props.userData.data.slice(0, 3).map((data) => {
        return (
          <ul key={data.id}>
            <li className="flex"><img src={data.thumbnailUrl} alt="" /></li>         
          </ul>
        );
      });
    }
    return(
      <div>
        {mydata}
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
})(About);