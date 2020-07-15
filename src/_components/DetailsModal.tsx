import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import { UserInfo } from '../_constants/users.interface';

type Props = {
    show: boolean,
    onHide: () => void,
    user: UserInfo
}

const DetailsModal = (props: Props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Details for {props.user.name.username}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    <b>Street: </b>
                    {props.user.location.street.name + " " + props.user.location.street.number}
                </p>
                <p>
                    <b>City: </b>
                    {props.user.location.city}
                </p>
                <p>
                    <b>State: </b>
                    {props.user.location.state}
                </p>
                <p>
                    <b>Postcode: </b>
                    {props.user.location.postcode}
                </p>
                <p>
                    <b>Phone: </b>
                    {props.user.phone}
                </p>
                <p>
                    <b>Cell: </b>
                    {props.user.cell}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DetailsModal