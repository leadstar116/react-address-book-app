import { LOCATION_UPDATED } from '../_actions/settings.actions'
import { LocationEnum, LocationSettings } from '../_constants/settings.interface';

const settingsState = {
    location: {
        nationality: LocationEnum.Any
    } as LocationSettings
}

const settingsReducer = (state = settingsState, action: any) => {
    const { type, payload } = action

    switch (type) {
        case LOCATION_UPDATED:
            return {
                ...state,
                location: {
                    ...state.location,
                    nationality: payload
                }
            }
        default:
            break;
    }
    return state
}

export default settingsReducer