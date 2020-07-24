import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loadUsers, updateUsers } from '../_helpers/user.thunk'
import { alertSuccess } from '../_actions/alert.actions'
import User from './User'
import { initialState } from '../_constants/state.interface'

type Props = {
    searchString: string,
}

const UserList = ({ searchString }: Props) => {
    const dispatch = useDispatch()
    const userList = useSelector((state:initialState) => state.usersReducer)
    const alertState = useSelector((state:initialState) => state.alertReducer)
    const settings = useSelector((state:initialState) => state.settingsReducer)

    const [isFetching, setIsFetching] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)

    const usersCount = 50
    const maxUsersCount = 1000

    // Preload users
    useEffect(() => {
        if(userList.isPreloaded)
            return
        dispatch(loadUsers(usersCount, settings.location.nationality))
    }, [dispatch, userList, settings, usersCount])

    // Initialize users at first load
    useEffect(() => {
        if(!userList.isPreloaded
            || isInitialized
            || userList.users.length)
            return
        dispatch(updateUsers())
        setIsInitialized(true)
    }, [userList, dispatch, isInitialized, usersCount])

    // Add preloaded users to users list when scrolling
    useEffect(() => {
        if(!isFetching || searchString)
            return
        if(userList.users.length >= maxUsersCount) {
            dispatch(alertSuccess('End of users catalog'))
            return
        }
        dispatch(updateUsers())
        setIsFetching(false)
    }, [userList, dispatch, isFetching, searchString])

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
        return userList.users.filter((user) => {
            const name = user.name.first + user.name.last as string
            return name.split(' ').join('').toLowerCase().includes(
                searchString.split(' ').join('').toLowerCase()
            )
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
            {alertState !== undefined &&
                <div className={alertState.alertClass}>
                    {alertState.alertMessage}
                </div>
            }
            {(!filteredUsers.length && userList.users.length)
                ? (<div className="alert alert-danger text-center">
                    Sorry, we couldn't find a user with that name
                    </div>)
                : ''
            }
        </div>
    )
}

export default connect()(UserList)