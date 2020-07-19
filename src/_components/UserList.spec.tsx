import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { LocationEnum, LocationSettings } from '../_constants/settings.interface';
import UserList from './UserList'
import { UserInfo } from '../_constants/users.interface';


describe('UserList Component', () => {
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

    const settingsState = {
        location: {
            nationality: LocationEnum.Any
        } as LocationSettings
    }

    const usersState = {
        users: [testUserInfo],
        isPreloaded: true
    }

    const mockStore = configureStore();
    let store = mockStore({
        settingsReducer: settingsState,
        usersReducer: usersState,
    })

    store.dispatch = jest.fn();

    let component = renderer.create(
        <Provider store={store}>
            <UserList searchString=""/>
        </Provider>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})