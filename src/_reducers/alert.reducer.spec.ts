import * as alertActions from '../_actions/alert.actions'
import { AlertState } from '../_constants/alert.interface'
import alertReducer from './alert.reducer'

describe('alert reducer test', () => {
    const initialState = {
        alertClass: '',
        alertMessage: ''
    } as AlertState

    test('should update with success class and message', () => {
        const expectedState = {
            alertClass: 'alert alert-success text-center',
            alertMessage: 'Success'
        } as AlertState
        const message = 'Success'
        const action = {
            type: alertActions.ALERT_SUCCESS,
            payload: { message }
        }
        const newState = alertReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with failure class and message', () => {
        const expectedState = {
            alertClass: 'alert alert-danger text-center',
            alertMessage: 'Failed'
        } as AlertState
        const message = 'Failed'
        const action = {
            type: alertActions.ALERT_FAILURE,
            payload: { message }
        }
        const newState = alertReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with loading class and message', () => {
        const expectedState = {
            alertClass: 'alert alert-info text-center',
            alertMessage: 'Loading'
        } as AlertState
        const message = 'Loading'
        const action = {
            type: alertActions.ALERT_LOADING,
            payload: { message }
        }
        const newState = alertReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with empty class and message', () => {
        const expectedState = {
            alertClass: '',
            alertMessage: ''
        } as AlertState
        const message = ''
        const action = {
            type: alertActions.ALERT_CLEAR,
            payload: { message }
        }
        const newState = alertReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })
})