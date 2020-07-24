export interface SettingsState {
    location: LocationSettings
}

export interface LocationSettings {
    nationality: LocationEnum
}

export enum LocationEnum {
    Any = "",
    CH = "CH",
    ES = "ES",
    FR = "FR",
    GB = "GB",
}