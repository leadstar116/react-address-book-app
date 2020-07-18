import { USER_LOADED_SUCCESSFULLY, CLEAR_USERS, UPDATE_USERS_WITH_PRELOADED_USERS, UPDATE_PRELOADED_FLAG } from "../_actions/users.actions";
import { UserInfo } from "../_constants/users.interface"

const usersState = {
    users: [] as UserInfo[],
    preloadedUsers: [] as UserInfo[],
    isPreloaded: false
}
const usersReducer = (state = usersState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case USER_LOADED_SUCCESSFULLY:
            return {
                ...state,
                preloadedUsers: payload.users.map((user: UserInfo) => ({
                    ...user,
                    name: {
                        ...user.name,
                        username: user.login.username
                    }
                })),
                isPreloaded: true
            }
        case UPDATE_USERS_WITH_PRELOADED_USERS:
            return {
                ...state,
                users: state.users.concat(state.preloadedUsers),
                preloadedUsers: [],
                isPreloaded: false,
            }
        case UPDATE_PRELOADED_FLAG:
            return {
                ...state,
                isPreloaded: payload
            }
        case CLEAR_USERS:
            return {
                ...state,
                users: []
            }
        default:
            break;
    }
    return state
}

export default usersReducer