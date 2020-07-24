import {
    ALERT_FAILURE,
    ALERT_SUCCESS,
    ALERT_CLEAR,
    ALERT_LOADING
} from '../_actions/alert.actions'
import { AlertState } from '../_constants/alert.interface';

const alertState: AlertState = {
    alertClass: '',
    alertMessage: ''
}

const alertReducer = (state = alertState, action: any) => {
    const {type, payload} = action

    switch(type) {
        case ALERT_SUCCESS: {
            return {
                ...state,
                alertMessage: payload.message,
                alertClass: 'alert alert-success text-center'
            }
        }
        case ALERT_FAILURE: {
            return {
                ...state,
                alertMessage: payload.message,
                alertClass: 'alert alert-danger text-center'
            }
        }
        case ALERT_LOADING: {
            return {
                ...state,
                alertMessage: payload.message,
                alertClass: 'alert alert-info text-center'
            }
        }
        case ALERT_CLEAR: {
            return {
                ...state,
                alertMessage: '',
                alertClass: ''
            }
        }
    }
    return state
}

export default alertReducer