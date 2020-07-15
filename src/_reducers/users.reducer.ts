import { LOAD_USERS_SUCCESSFULLY } from "../_actions/users.actions";
import { UserInfo } from "../_constants/users.interface"

const usersState = {
    users: [] as UserInfo[]
}
const usersReducer = (state = usersState, action: any) => {
    const {type, payload} = action

    switch (type) {
        case LOAD_USERS_SUCCESSFULLY:
            return {
                ...state,
                users: state.users.concat(
                    payload.users.map((user: UserInfo) => ({
                        ...user,
                        name: {
                            ...user.name,
                            username: user.login.username
                        }
                    }))
                )
            }
        default:
            break;
    }
    return state
}

export default usersReducer