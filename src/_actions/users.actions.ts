import { UserInfo } from "../_constants/users.interface"

export const LOAD_USERS_SUCCESSFULLY = "LOAD_USERS"
export const loadUsersSuccessfully = (users: Array<UserInfo>) => ({
    type: LOAD_USERS_SUCCESSFULLY,
    payload: { users }
})

export const CLEAR_USERS = "CLEAR_USERS"
export const clearUsers = () => ({
    type: CLEAR_USERS,
    payload: { }
})