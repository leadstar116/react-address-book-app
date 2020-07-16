import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, FormControl, InputGroup } from 'react-bootstrap'

type Props = {
    searchString: string,
    setSearchString: (name: string) => void
}

const Header = (props: Props) => {
    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Navbar.Brand href="#home">Address Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="mr-2" to="/">Home</Link>
                    <Link to="/settings">Settings</Link>
                </Nav>
                <InputGroup className="mr-sm-2 search-input" >
                    <InputGroup.Prepend>
                        <InputGroup.Text className={props.searchString && "border border-danger"}>
                            First and last name
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className={props.searchString
                            ? "mr-sm-2 border border-danger"
                            : "mr-sm-2"
                        }
                        value={props.searchString}
                        onChange={(e) => props.setSearchString(e.target.value)}
                    />
                </InputGroup>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header