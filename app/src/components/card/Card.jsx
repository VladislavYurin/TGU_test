import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./style.css";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

export default ({ user }) => {
    const dispatch = useDispatch();

    const cardImg = {
        backgroundImage: `url("${user.avatar || "https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg"}")`,
        backgroundSize: "cover",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
    }

    return <Link to={`/:${user.id}`} className="cardsLink">
        <div className="card">
            <div style={cardImg}></div>
            <div>
                <h3 className="userName">
                    {user.firstName} {user.lastName} {user.patronymic}
                </h3>
                <h4 className="userEmail">
                    {user.email}
                </h4>
            </div>
            <Form>
                <div key="default-checkbox" className="mb-3">
                    <Form.Check
                        type="checkbox"
                        id="default-checkbox"
                        label="delete?"
                    />
                </div>
            </Form>
        </div >
    </Link>

}
