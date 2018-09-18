import React from 'react';
import API from '../utils/api';

class About extends React.Component {
  state = {
      response: null
  }

  componentDidMount() {
    this.getData();
  }


  getData = () => {
    API.get('/photos')
      .then(response => {
        this.setState({
          response: response          
        })
        console.log(response);
      })
      .catch(error => {
        console.log("error = ", error);
      });
  }
  render() {
    let mydata = null;
    if (this.state.response != null) {
     mydata = this.state.response.data.slice(0, 10).map((data) => {
        return (
          <ul key={data.id}>
            <li className="flex"><img src={data.thumbnailUrl} alt="" /> {data.title}</li>
            <li className="flex"><strong>Url:</strong> {data.url}</li>           
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

export default About;