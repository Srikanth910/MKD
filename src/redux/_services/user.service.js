// import config from 'config';
// import { authHeader } from '../_helpers';

import axios from 'axios'
const basePath = "http://localhost:8080"
export const userService = {
    login,

};

function login(payload) {



    return axios.post(`${basePath}/login`, { user: payload.username, password: payload.password })

        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.data));

            return user;
        });
}


