import './assets/scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    if (this.state.value !== '') {
      alert('A name was submitted: ' + this.state.value);
      e.preventDefault();
    } else {
      alert('Please input...');
    }
  }

  render() {
    return ( <form onSubmit = {
        (e) => this.handleSubmit(e)
      } >
      <label> Name: < input type = "text"
      value = {
        this.state.value
      }
      onChange = {
        (e) => this.handleChange(e)
      }
      /> </label > <input type = "submit"
      value = "Submit" /> </form>
    );
  }
}
ReactDOM.render( <NameForm /> , document.getElementById('root'));