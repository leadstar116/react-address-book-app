import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { userLoadedSuccessfully, updatePreloadedFlag, updateUsersWithPreloadedUsers } from '../_actions/users.actions';
import { alertClear, alertFailure, alertLoading } from '../_actions/alert.actions';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const loadUsers = (userCount = 50, nationality = "") => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(alertLoading('Loading...'))
        let response = await fetch(`https://randomuser.me/api/?results=${userCount}&nat=${nationality}`)
        const result = await response.json()

        dispatch(updatePreloadedFlag(true))
        dispatch(userLoadedSuccessfully(result.results))
        dispatch(alertClear())
    } catch(e) {
        dispatch(alertFailure(e.toString()))
    }
}

export const updateUsers = () => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(alertLoading('Loading...'))
        dispatch(updateUsersWithPreloadedUsers())
        dispatch(alertClear())
    } catch(e) {
        dispatch(alertFailure(e.toString()))
    }
}