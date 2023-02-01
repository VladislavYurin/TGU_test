import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./style.css";

export default ({ user }) => {
    const dispatch = useDispatch();

    const cardImg = {
        backgroundImage: `url("${user.avatar || "https://damion.club/uploads/posts/2022-03/thumbs/1646424666_24-damion-club-p-anime-neon-art-27.jpg"}")`,
        backgroundSize: "cover",
        borderTopLeftRadius: "15px",
        borderTopRightRadius: "15px",
    }

    return <div className="card">
        <div style={cardImg}></div>
        <div>
            <div>
                {user.firstName} {user.lastName} {user.patronymic}
            </div>
            <div>
                {user.email}
            </div>
            <div>
                {user.about}
            </div>
        </div>
    </div >

}
