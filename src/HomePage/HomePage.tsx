import React, { useState } from 'react'
import Header from '../_components/Header'
import UserList from '../_components/UserList'

function HomePage() {
    const [searchString, setSearchString] = useState("")

    return (
        <div>
            <Header
                withSearchBar = {true}
                searchString = {searchString}
                setSearchString = {setSearchString}
            />
            <UserList
                searchString = {searchString}
            />
        </div>
    )
}

export default HomePage