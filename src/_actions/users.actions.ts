import { UserInfo } from "../_constants/users.interface"

export const USER_LOADED_SUCCESSFULLY = "USER_LOADED_SUCCESSFULLY"
export const userLoadedSuccessfully = (users: Array<UserInfo>) => ({
    type: USER_LOADED_SUCCESSFULLY,
    payload: { users }
})

export const CLEAR_USERS = "CLEAR_USERS"
export const clearUsers = () => ({
    type: CLEAR_USERS,
    payload: { }
})

export const UPDATE_USERS_WITH_PRELOADED_USERS = "UPDATE_USERS_WITH_PRELOADED_USERS"
export const updateUsersWithPreloadedUsers = () => ({
    type: UPDATE_USERS_WITH_PRELOADED_USERS,
    payload: { }
})

export const UPDATE_PRELOADED_FLAG = "UPDATE_PRELOADED_FLAG"
export const updatePreloadedFlag = (flag: boolean) => ({
    type: UPDATE_PRELOADED_FLAG,
    payload: { flag }
})