import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import "./style.css";

export default ({ user }) => {
    const dispatch = useDispatch();

    return <Card style={{ width: '200px' }}>
        <Card.Img variant="top" src={user.avatar} />
        <Card.Body>
            <Card.Title>
                {user.firstName} {user.lastName} {user.patronymic}
            </Card.Title>
            <Card.Subtitle>
                {user.email}
            </Card.Subtitle>
            <Card.Text>
                {user.about}
            </Card.Text>
        </Card.Body>
    </Card>

}
