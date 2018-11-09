
import {
    REQUEST_EMPLOYEES_SUCCESS,
   } from './constants';
  
  const initialStateEmployees = {
    employees: [],
  }
  
  export const requestEmployees = (state=initialStateEmployees, action={}) => {
    switch (action.type) {
      case REQUEST_EMPLOYEES_SUCCESS:
        return Object.assign({}, state, {employees: action.employees})
      default:
        return state
    }
  }