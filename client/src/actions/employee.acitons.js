import {
    REQUEST_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS
} from '../constants'

import axios from 'axios';

export const requestEmployees = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_DB_URL}/getEmployees`).then((res) => {
        dispatch({type: REQUEST_EMPLOYEES_SUCCESS, employees: res.data});
    })
    .catch((err) => {
        return err;
    })
}

export const updateEmployee = (employee) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_DB_URL}/updateEmployee`, employee).then((res) => {
        dispatch({type: UPDATE_EMPLOYEE_SUCCESS, employee: res.data});
    })
    .catch((err) => {
        return err;
    })
}

export const addEmployee = (employee) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_DB_URL}/addEmployee`, employee).then((res) => {
        dispatch({type: ADD_EMPLOYEE_SUCCESS, employee: res.data});
    })
    .catch((err) => {
        return err;
    })
}

export const deleteEmployee = (id) => (dispatch) => {
    axios.post(`${process.env.REACT_APP_DB_URL}/deleteEmployee/${id}`).then((res) => {
        dispatch({type: DELETE_EMPLOYEE_SUCCESS, employee: res.data});
    })
    .catch((err) => {
        return err;
    })
}
