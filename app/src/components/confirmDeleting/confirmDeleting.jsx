import React, { useEffect } from "react";
// import "./style.css";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { deleteUserAsync } from '../../redux/userSlice';
import { useSelector, useDispatch } from 'react-redux';

export default ({ id, changeConfirmDeletingPopupActive }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleDeleteUser = () => {
        dispatch(deleteUserAsync({ id }));
        nav("/");
        window.location.reload();
    };
    return <div className="popupBox">
        <div className="popup">
            <div className="popupClose" onClick={e => { changeConfirmDeletingPopupActive(false) }}>x</div>
            <div>Do you sure?</div>
            <Button variant="warning" type="submit" onClick={handleDeleteUser}>Yes</Button>
            <Button variant="warning" type="submit" onClick={(e) => {
                changeConfirmDeletingPopupActive(false)
            }}>No</Button>
        </div>
    </div >

}