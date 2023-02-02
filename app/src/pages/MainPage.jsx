import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAsync } from "../redux/userSlice";
import { ButtonGroup, Button } from "react-bootstrap"
import UserCard from "../components/card/Card";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import CreateUserPopup from "../components/createUserPopup/createUserPopup";

export default () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(getUsersAsync());
        users.sort((a, b) => {
            let x = a.createDate;
            let y = b.createDate;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
        })
    }, [dispatch]);

    const nav = useNavigate();

    const [createUserPopupActive, changeCreateUserPopupActive] = useState(false);
    const [deleteUserPopupActive, changeDeleteUserPopupActive] = useState(false);

    return <div>
        <ButtonGroup size="lg" className="mb-2">
            <Button variant="secondary" onClick={e => { changeCreateUserPopupActive(true) }}>Create user</Button>
            <Button variant="secondary" onClick={e => { changeDeleteUserPopupActive(true) }}>Delete user</Button>
        </ButtonGroup>
        <div className="mainContainer">
            {users.map((user, id) => (
                <UserCard id={id} user={user} />
            ))}
        </div>
        {createUserPopupActive ? <CreateUserPopup changeCreateUserPopupActive={changeCreateUserPopupActive} /> : <></>}
    </div>


}