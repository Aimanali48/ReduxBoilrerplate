import { SET_CURRENT_USER } from './types';


export const RegisterUser = () => dispatch => {
  dispatch({
    type: SET_CURRENT_USER,
    payload: 'user1'
  });
};

