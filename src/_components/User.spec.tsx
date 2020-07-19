import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { UserInfo } from '../_constants/users.interface';
import User from './User'


describe('User Component', () => {
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

    let component = renderer.create(
        <BrowserRouter>
            <User data={testUserInfo}/>
        </BrowserRouter>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})