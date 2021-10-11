import { userConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './alert.actions';
import { history } from '../_helpers';
import 'antd/dist/antd.css';
import { message, } from 'antd';
export const userActions = {
    login,
   
};

function login(payload) {
    return dispatch => {
        // dispatch(request({ username }));

        userService.login(payload)
            .then(
                user => { 
                    dispatch(success(user));
                    // history.push('/dashboard');
                },
                error => {
                    message.error(' Invalid  Details please try again');
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

