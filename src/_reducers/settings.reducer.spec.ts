import settingsReducer from './settings.reducer'
import { LocationEnum, LocationSettings } from '../_constants/settings.interface';
import { LOCATION_UPDATED } from '../_actions/settings.actions';

const initialState = {
    location: {
        nationality: LocationEnum.Any
    } as LocationSettings
}

describe('settings reducer test', () => {
    test('should update with new location - Any', () => {
        const location = ""
        const action = {
            type: LOCATION_UPDATED,
            payload: location
        }
        const expectedState = {
            location: {
                nationality: location
            }
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with new location - CH', () => {
        const location = "CH"
        const action = {
            type: LOCATION_UPDATED,
            payload: location
        }
        const expectedState = {
            location: {
                nationality: location
            }
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with new location - ES', () => {
        const location = "ES"
        const action = {
            type: LOCATION_UPDATED,
            payload: location
        }
        const expectedState = {
            location: {
                nationality: location
            }
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with new location - FR', () => {
        const location = ""
        const action = {
            type: LOCATION_UPDATED,
            payload: location
        }
        const expectedState = {
            location: {
                nationality: location
            }
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })

    test('should update with new location - GB', () => {
        const location = ""
        const action = {
            type: LOCATION_UPDATED,
            payload: location
        }
        const expectedState = {
            location: {
                nationality: location
            }
        }
        const newState = settingsReducer(initialState, action)

        expect(newState).toEqual(expectedState)
    })
})