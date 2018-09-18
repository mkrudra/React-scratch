import axios from 'axios';

// Set config defaults when creating the instance
const instance = axios.create({
  baseURL: '//jsonplaceholder.typicode.com'
});
export default instance;

