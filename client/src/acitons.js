import {
    REQUEST_EMPLOYEES_SUCCESS,
} from './constants'

import axios from 'axios';

export const requestEmployees = () => (dispatch) => {
    return axios.get('http://localhost:10010/getEmployees').then((data) => {
        dispatch(requestEmployeesSuccess(data));
    })
    .catch((err) => {
        return err;
    })
}

export const requestEmployeesSuccess = (employees) => {
    return {
        type: REQUEST_EMPLOYEES_SUCCESS,
        employees
    }
}