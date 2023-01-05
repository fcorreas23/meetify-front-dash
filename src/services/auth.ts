import API from '@app/utils/axios'


const login =  async ( email:string, password:string ) => {
  
  try {
    const data = { email, password }
    const crsf = await API.get('/sanctum/csrf-cookie')
    console.log('CRSF: ', crsf);
    const response = await  API.post('/login', data, {xsrfHeaderName: "X-XSRF-TOKEN"})
    console.log('RESP: ', response.data)
    return 'WELL DONW'
  } catch (error) {
    console.log('ERROR: ', error);
    return 'ERROR'
  }
  
  /* API.get('/sanctum/csrf-cookie')
    .then(
      response => {
        API.post('/login', data, { xsrfHeaderName: "X-XSRF-TOKEN", withCredentials: true})
        console.log('RES:', response.data);
        return 'WELL DONE'
      })
      .catch(function (error) {
        console.log(error.response.data.message);
        return 'ERROR'
      }); */
}

export default {
  login
}

/* import { removeWindowClass } from '@app/utils/helpers';
import { Gatekeeper } from 'gatekeeper-client-sdk';
import axios from 'axios'


export const loginMeetify = async( email:string, password:string ) => {
  const data = {'email': email, 'password': password};
  
  console.log("LoginMeetify", data);
  axios.defaults.withCredentials = true;
  axios.get('http://localhost/sanctum/csrf-cookie')
  .then(response => {
    return axios.post('http://localhost/login', data, {
      xsrfHeaderName: "X-XSRF-TOKEN",
      withCredentials: true
    })
  .catch(function (error) {
    console.log(error.response.data.message);
  });
  });

  return 'asdf';
}


export const loginByAuth = async (email: string, password: string) => {
  const token = await Gatekeeper.loginByAuth(email, password);
  localStorage.setItem('token', token);
  removeWindowClass('login-page');
  removeWindowClass('hold-transition');
  console.log("Token:", token);
  return token;
};
 */