import {
    REQUEST_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS
} from './constants'

import axios from 'axios';

export const requestEmployees = () => (dispatch) => {
    axios.get('http://localhost:10010/getEmployees').then((res) => {
        dispatch({type: REQUEST_EMPLOYEES_SUCCESS, employees: res.data});
    })
    .catch((err) => {
        return err;
    })
}

export const updateEmployee = (employee) => (dispatch) => {
    axios.post('http://localhost:10010/updateEmployee', employee).then((res) => {
        dispatch({type: UPDATE_EMPLOYEE_SUCCESS, employee: res.data});
    })
    .catch((err) => {
        return err;
    })
}
