
import axios from 'axios';

const instance1 = axios.create({
  baseURL = 'http://jsonplaceholder.typicode.com/',
});


instance1.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

export default instance1;