import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { loadUsers } from '../_helpers/user.thunk'
import { UserInfo } from '../_constants/users.interface'
import User from './User'
import { AlertData } from '../_constants/alert.interface'

type Props = {
    userList: UserData,
    alertState: AlertData,
    callLoadUsers: (userCount: number) => {}
}
const UserList = (props: Props) => {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if(isLoaded)
            return;
        props.callLoadUsers(50)
        setIsLoaded(true)
    }, [props, isLoaded])

    return (
        <div className="p-2">
            {
                props.userList.users.map((user, index) => (
                    <User data={user} key={index}/>
                ))
            }
            {props.alertState !== undefined &&
                <div className={props.alertState.alertClass}>
                    {props.alertState.alertMessage}
                </div>
            }
        </div>
    )
}

interface UserData {
    users: UserInfo[]
    alertState: AlertData
}

const mapStateToProps = (state: {
        usersReducer: UserData,
        alertReducer: AlertData
    }) => ({
    userList: state.usersReducer,
    alertState: state.alertReducer
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    callLoadUsers: (userCount = 50) => dispatch(loadUsers(userCount))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)