import axios from 'axios' 
import { apibaseUrl } from './Url';
const instance = axios.create({
    baseURL:apibaseUrl,
    
  });
  export default instance;