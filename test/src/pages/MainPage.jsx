import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from "../redux/userSlice";
import { Container, Row, Col, ButtonGroup, Button, Carousel } from "react-bootstrap"
import UserCard from "../components/card/Card";

export default () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersAsync());
    }, [dispatch]);

    return <Container className="mainContainer">
        <ButtonGroup size="lg" className="mb-2">
            <Button variant="secondary">Create user</Button>
            <Button variant="secondary">Delete user</Button>
        </ButtonGroup>
        {users.map((user) => (
            <UserCard id={user.id} user={user} />
        ))}
    </Container>


}