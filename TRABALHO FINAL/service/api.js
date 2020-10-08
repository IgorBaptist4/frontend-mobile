import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://residencia-ecommerce.us-east-1.elasticbeanstalk.com/',
    headers:{
        'Content-type':'application/json',
        'Accept':'application/json'
    }
});

export default Api;