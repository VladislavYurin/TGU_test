import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, ButtonGroup, Button, Carousel } from "react-bootstrap";
import { deleteUserAsync } from '../redux/userSlice';
import ConfirmDeleting from "../components/confirmDeleting/confirmDeleting";
import PatchUserPopup from "../components/patchUserPopup/patchUserPopup";

export default () => {
    let params = useParams();
    const [user, setUser] = useState({});
    const [id, setId] = useState();
    const [confirmDeletingPopupActive, changeConfirmDeletingPopupActive] = useState(false);
    const [patchUserPopupActive, changePatchUserPopupActive] = useState(false);


    const users = useSelector((state) => state.users);

    useEffect(() => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == params.id.slice(1)) {
                setUser(users[i]);
                setId(users[i].id);
            }
        }
    }, [])
    console.log(id);
    return (<div>
        <ButtonGroup size="lg" className="mb-2">
            <Button variant="secondary" onClick={e => { changeConfirmDeletingPopupActive(true) }}>Delete user</Button>
            <Button variant="secondary" onClick={e => { changePatchUserPopupActive(true) }}>Patch user</Button>
        </ButtonGroup>
        <img src={user.avatar}></img>
        <h1>{user.firstName} {user.lastName} {user.patronymic}</h1>
        <h2>{user.createDate}</h2>
        <h3>{user.email}</h3>
        {confirmDeletingPopupActive ? <ConfirmDeleting id={id} changeConfirmDeletingPopupActive={changeConfirmDeletingPopupActive} /> : <></>}
        {patchUserPopupActive ? <PatchUserPopup id={id} changePatchUserPopupActive={changePatchUserPopupActive} /> : <></>}
    </div>)

}