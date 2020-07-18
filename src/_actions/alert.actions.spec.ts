import * as alertActions  from './alert.actions'

describe('alert loading action', () => {
    it('should show loading alert message', () => {
      const message = 'Loading'
      const expectedAction = {
        type: alertActions.ALERT_LOADING,
        payload: { message }
      }
      expect(alertActions.alertLoading(message)).toEqual(expectedAction)
    })
})

describe('alert success action', () => {
    it('should show success alert message', () => {
        const message = "Success"
        const expectedAction = {
            type: alertActions.ALERT_SUCCESS,
            payload: { message }
        }
        expect(alertActions.alertSuccess(message)).toEqual(expectedAction)
    })
})

describe('alert failure action', () => {
    it('should show failure alert message', () => {
        const message = "Failure"
        const expectedAction = {
            type: alertActions.ALERT_FAILURE,
            payload: { message }
        }
        expect(alertActions.alertFailure(message)).toEqual(expectedAction)
    })
})

describe('alert clear action', () => {
    it('should show empty message', () => {
        const expectedAction = {
            type: alertActions.ALERT_CLEAR,
            payload: {}
        }
        expect(alertActions.alertClear()).toEqual(expectedAction)
    })
})