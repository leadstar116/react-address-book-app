import React, { useState } from 'react'
import { UserInfo } from '../_constants/users.interface'
import { Row, Col } from 'react-bootstrap'
import DetailsModal from './DetailsModal'

type Props = {
    data: UserInfo
}

const User = (props: Props) => {
    const [showDetail, setShowDetail] = useState(false);

    const handleClick = () => {
        setShowDetail(true)
    }
    return (
        <>
            <Row className="m-1 rounded border align-items-center text-center p-1 user" onClick={handleClick}>
                <Col xs={12} sm={2}><img src={props.data.picture.thumbnail} alt=""/></Col>
                <Col xs={12} sm={2}><span>{ props.data.name.username }</span></Col>
                <Col xs={12} sm={2}><span>{ props.data.nat }</span></Col>
                <Col xs={12} sm={2}><span>{ props.data.name.first + ' ' + props.data.name.last }</span></Col>
                <Col xs={12} sm={4}><span>{ props.data.email }</span></Col>
            </Row>
            <DetailsModal
                show={showDetail}
                onHide={() => setShowDetail(false)}
                user={props.data}
            />
        </>
    )
}

export default User