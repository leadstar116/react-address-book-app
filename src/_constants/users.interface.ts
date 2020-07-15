export interface UserInfo {
    email: string,
    name: UserName,
    picture: UserPicture
    cell: string,
    dob: BirthData,
    gender: string,
    locatoin: UserLocation,
    nat: String,
    phone: String,
    id: UserId,
    login: UserLogin
}

export interface UserName {
    first: string,
    last: string,
    username: string
}

export interface UserPicture {
    thumbnail: string,
    large: string,
    medium: string
}

export interface BirthData {
    date: string,
    age: number
}

export interface UserLocation {
    city: string,
    country: string,
    state: string,
    postcode: number,
    coordinates: UserLocationCoordinate,
    street: UserLocationStreet,
    timezone: UserLocationTimezone
}

export interface UserLocationCoordinate {
    latitude: string,
    longitude: string
}

export interface UserLocationStreet {
    name: string,
    number: number
}

export interface UserLocationTimezone {
    description: string,
    offset: string
}

export interface UserId {
    name: string,
    value: string
}

export interface UserLogin {
    username: string
}