export const LOCATION_UPDATED = "LOCATION_UPDATED"
export const updateLocation = (newLocation: string) => ({
    type: LOCATION_UPDATED,
    payload: newLocation
})