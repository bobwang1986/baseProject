import axios from 'axios';

export const ON_SUBMIMT = 'ON_SUBMIMT';

export const submit = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/user').then(function (response) {
      console.log(response);
      dispatch({type: ON_SUBMIMT, payload: response.data})
    }).catch(function (error) {
      console.log(error);
    });
  }
 }
