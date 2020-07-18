import { UserInfo } from "../_constants/users.interface"
import usersReducer from './users.reducer'
import * as usersActions from '../_actions/users.actions'

describe('users reducer test', () => {
    let initialState = {
        users: [] as UserInfo[],
        preloadedUsers: [] as UserInfo[],
        isPreloaded: false
    }

    const testUserInfo = {
        email: 'test@test.com',
        name: {
            first: "James",
            last: "Bond",
            username: "test"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/75.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        } ,
        cell: "+14325432870",
        dob: {
            date: "1993-07-20T09:44:18.674Z",
            age: 26
        },
        gender: "male",
        location: {
            street: {
                name: "9278 new road",
                number: 12
            },
            city: "kilcoole",
            state: "waterford",
            postcode: 93027,
            country: "CH",
            coordinates: {
              latitude: "20.9267",
              longitude: "-7.9310"
            },
            timezone: {
              offset: "-3:30",
              description: "Newfoundland"
            }
        },
        nat: "CH",
        phone: "+14325432870",
        id: {
            name: "testuser111",
            value: "12"
        },
        login: {
            username: "test"
        }
    } as UserInfo

    test('LOAD_USERS_SUCCESSFULLY: should set loaded users to preloaded users and isPreloaded to true', () => {
        const users = [ testUserInfo ]
        const expectedState = {
            users: [],
            preloadedUsers: users,
            isPreloaded: true
        }
        const action = {
            type: usersActions.LOAD_USERS_SUCCESSFULLY,
            payload: { users }
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test('UPDATE_USERS_WITH_PRELOADED_USERS: should add preloaded users to users, set isPreloaded to false and preloadedUsers to empty array',
        () => {
            const users = [ testUserInfo ]
            initialState = {
                users: [],
                preloadedUsers: [ testUserInfo ],
                isPreloaded: true
            }
            const expectedState = {
                users,
                preloadedUsers: [],
                isPreloaded: false
            }
            const action = {
                type: usersActions.UPDATE_USERS_WITH_PRELOADED_USERS,
                payload: {}
            }
            const newState = usersReducer(initialState, action)
            expect(newState).toEqual(expectedState)
        })

    test('UPDATE_PRELOADED_FLAG: should set isPreloaded to true', () => {
        initialState = {
            users: [],
            preloadedUsers: [],
            isPreloaded: true
        }
        const expectedState = {
            users: [],
            preloadedUsers: [],
            isPreloaded: true
        }
        const action = {
            type: usersActions.UPDATE_PRELOADED_FLAG,
            payload: true
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })

    test('CLEAR_USERS: should set users to empty', () => {
        initialState = {
            users: [ testUserInfo ],
            preloadedUsers: [],
            isPreloaded: false
        }
        const expectedState = {
            users: [],
            preloadedUsers: [],
            isPreloaded: false
        }
        const action = {
            type: usersActions.CLEAR_USERS,
            payload: {}
        }
        const newState = usersReducer(initialState, action)
        expect(newState).toEqual(expectedState)
    })
})