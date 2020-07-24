import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { initialState } from '../_constants/state.interface'
import { updateNationality } from '../_helpers/settings.thunk'

const Settings = () => {
    const dispatch = useDispatch()
    const settings = useSelector((state: initialState) => state.settingsReducer)

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
                            value={settings.location.nationality}
                            onChange={(e) => dispatch(updateNationality(e.target.value))}
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

export default connect()(Settings)