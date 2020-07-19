import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header'


describe('Header Component', () => {
    let component = renderer.create(
        <BrowserRouter>
            <Header
                withSearchBar={false}
                searchString=""
                setSearchString={(name: string) => {}}
            />
        </BrowserRouter>
    );

    it('should render with given props', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})