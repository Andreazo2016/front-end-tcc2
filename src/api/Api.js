import Axios from 'axios';
const api = Axios.create( {baseURL:'https://poly.googleapis.com/v1'});
export default api;