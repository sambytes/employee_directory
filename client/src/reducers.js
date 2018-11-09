
import {
    REQUEST_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEE_SUCCESS
} from './constants';

const initialStateEmployees = {
    employees: [],
}

export const requestEmployees = (state = initialStateEmployees, action = {}) => {
    switch (action.type) {
        case REQUEST_EMPLOYEES_SUCCESS:
            return Object.assign({}, state, { employees: action.employees })
        case UPDATE_EMPLOYEE_SUCCESS:
            return Object.assign({}, state, {
                employees: state.employees.map(e => e.id === action.employee.id ? action.employee : e)
            })
        default:
            return state
    }
}