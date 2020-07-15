import React from 'react'
import { UserInfo } from '../_constants/users.interface'
import { Row, Col } from 'react-bootstrap'

type Props = {
    data: UserInfo
}
const User = (props: Props) => {
    return (
        <Row xs={1} md={4} className="m-1 rounded border align-items-center p-1 user">
            <Col><img src={props.data.picture.thumbnail} alt=""/></Col>
            <Col><span>{ props.data.name.username }</span></Col>
            <Col><span>{ props.data.name.first + ' ' + props.data.name.last }</span></Col>
            <Col><span>{ props.data.email }</span></Col>
        </Row>
    )
}

export default User