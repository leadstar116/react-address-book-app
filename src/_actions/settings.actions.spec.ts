import * as settingsAction from './settings.actions'

describe('update location action', () => {
    it('should return new location', () => {
        const locaton = "CH"
        const expectedAction = {
            type: settingsAction.LOCATION_UPDATED,
            payload: locaton
        }
        expect(settingsAction.updateLocation(locaton)).toEqual(expectedAction)
    })
})