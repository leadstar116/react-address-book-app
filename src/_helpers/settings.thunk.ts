import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { alertFailure } from '../_actions/alert.actions';
import { loadUsers } from './user.thunk';
import { clearUsers } from '../_actions/users.actions';
import { updateLocation } from '../_actions/settings.actions';

type MyRootState = {};
type MyExtraArg = undefined;
type MyThunkDispatch = ThunkDispatch<MyRootState, MyExtraArg, Action>;

export const updateNationality = (nationality = "") => async (dispatch: MyThunkDispatch) => {
    try {
        dispatch(updateLocation(nationality))
        dispatch(clearUsers())
        dispatch(loadUsers(50, nationality))
    } catch(e) {
        dispatch(alertFailure(e))
    }
}