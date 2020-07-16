import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { loadUsers } from '../_helpers/user.thunk'
import { UserInfo } from '../_constants/users.interface'
import User from './User'
import { AlertData } from '../_constants/alert.interface'

type Props = {
    searchString: string,
    userList: UserData,
    alertState: AlertData,
    callLoadUsers: (userCount: number) => {}
}
const UserList = (props: Props) => {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isFetching, setIsFetching] = useState(false)
    const usersCount = 50

    // Load users at initializing
    useEffect(() => {
        if(isLoaded || props.userList.users.length)
            return
        props.callLoadUsers(usersCount)
        setIsLoaded(true)
    }, [props, isLoaded, usersCount])

    // Load users with scrolling
    useEffect(() => {
        if(!isFetching || props.searchString)
            return
        props.callLoadUsers(usersCount)
        setIsFetching(false)
    }, [props, isFetching, usersCount])

    // Handle scroll
    function handleScroll() {
        if ((window.innerHeight + document.documentElement.scrollTop) !== document.documentElement.offsetHeight)
            return
        setIsFetching(true)
    }

    // Setup scroll event
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const filtereUsersWithSearchKey = () => {
        return props.userList.users.filter((user) => {
            const name = user.name.first + user.name.last as string
            return name.toLowerCase().includes(props.searchString.toLowerCase())
        })
    }

    const filteredUsers = filtereUsersWithSearchKey()

    return (
        <div className="p-2">
            {
                filteredUsers.map((user, index) => (
                    <User data={user} key={index}/>
                ))
            }
            {props.alertState !== undefined &&
                <div className={props.alertState.alertClass}>
                    {props.alertState.alertMessage}
                </div>
            }
            {(!filteredUsers.length && props.userList.users.length)
                ? (<div className="alert alert-danger text-center">
                    Sorry, we couldn't find a user with that name
                    </div>)
                : ''
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
    callLoadUsers: (userCount = 50) => dispatch(loadUsers(userCount)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList)