import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { LocationSettings } from '../_constants/settings.interface'
import { updateNationality } from '../_helpers/settings.thunk'

type Props = {
    settings: settingsState,
    updateNationality: (location: string) => {}
}

const Settings = (props: Props) => {
    return (
        <div className="p-2">
            <h2 className="text-center">Settings</h2>
            <div className="settings-container">
                <Row className="text-center">
                    <Col xs="12" sm="3">Nationality: </Col>
                    <Col xs="12" sm="9">
                        <select
                            name="nationality"
                            id="nationality"
                            className="nationality-select"
                            value={props.settings.location.nationality}
                            onChange={(e) => props.updateNationality(e.target.value)}
                        >
                            <option value="Any">Any</option>
                            <option value="CH">CH</option>
                            <option value="ES">ES</option>
                            <option value="FR">FR</option>
                            <option value="GB">GB</option>
                        </select>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

interface settingsState {
    location: LocationSettings
}

const mapStateToProps = (state: {
        settingsReducer: settingsState,
    }) => ({
    settings: state.settingsReducer,
})

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
    updateNationality: (location: string) => dispatch(updateNationality(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)