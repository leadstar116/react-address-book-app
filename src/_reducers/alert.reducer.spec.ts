import * as alertActions from '../_actions/alert.actions'
import { AlertData } from '../_constants/alert.interface'
import alertReducer from './alert.reducer'

describe('success alert reducer', () => {
    const initialState = {
        alertClass: '',
        alertMessage: ''
    } as AlertData

    test('should update with success class and message', () => {
        const expectedState = {
            alertClass: 'alert alert-success text-center',
            alertMessage: 'Success'
        } as AlertData
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
        } as AlertData
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
        } as AlertData
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
        } as AlertData
        const message = ''
        const action = {
            type: alertActions.ALERT_CLEAR,
            payload: { message }
        }
        const newState = alertReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })
})