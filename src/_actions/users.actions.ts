import { UserInfo } from "../_constants/users.interface"

export const LOAD_USERS_SUCCESSFULLY = "LOAD_USERS"
export const loadUsersSuccessfully = (users: Array<UserInfo>) => ({
    type: LOAD_USERS_SUCCESSFULLY,
    payload: { users }
})