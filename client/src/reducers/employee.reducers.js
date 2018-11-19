
import {
    REQUEST_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS,
    ADD_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_SUCCESS
} from '../constants';

const initialStateEmployees = {
    employees: [],
}

export const requestEmployees = (state = initialStateEmployees, action = {}) => {
    switch (action.type) {
        case REQUEST_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.employees
            }
        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.map(e => e._id === action.employee._id ? action.employee : e)
            }
        case ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, action.employee]
            }
        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter((e) => e._id !== action.employee._id)
            }
        default:
            return state
    }
}