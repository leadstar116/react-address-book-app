import React from 'react'
import Header from '../_components/Header'
import Settings from '../_components/Settings'

function SettingsPage() {
    return (
        <div>
            <Header
                withSearchBar={false}
                searchString=""
                setSearchString={(name: string) => {}}
            />
            <Settings />
        </div>
    )
}

export default SettingsPage