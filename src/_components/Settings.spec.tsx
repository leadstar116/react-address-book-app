import configureStore from 'redux-mock-store';
import React from 'react';
import { Provider } from 'react-redux';
import renderer, { ReactTestRenderer } from 'react-test-renderer';
import { LocationEnum, LocationSettings } from '../_constants/settings.interface';
import Settings from './Settings'

const mockStore = configureStore();

const initialState = {
    location: {
        nationality: LocationEnum.Any
    } as LocationSettings
}

describe('Settings Component', () => {
    let store
    let component: ReactTestRenderer

    store = mockStore({
        settingsReducer: initialState
    })

    store.dispatch = jest.fn();

    component = renderer.create(
        <Provider store={store}>
            <Settings />
        </Provider>
    );

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})