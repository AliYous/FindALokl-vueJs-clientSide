import axios from 'axios';

export default axios.create({
    baseURL: 'https://findalokl.herokuapp.com/api'
})