import  { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {  useDispatch } from 'react-redux';
import { patchUserAsync } from '../../redux/userSlice';

export default ({ changePatchUserPopupActive, id }) => {
    const [avatar, setAvatar] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [patronymic, setPatronymic] = useState('');
    const [email, setEmail] = useState('');
    const [about, setAbout] = useState('');
    const [createDate, setCreateDate] = useState(new Date());

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(
            patchUserAsync({
                id: id,
                createDate: createDate,
                avatar: avatar,
                firstName: firstName,
                lastName: lastName,
                patronymic: patronymic,
                email: email,
                about: about,
            })
        );
        changePatchUserPopupActive(false);
    };

    return <div className="popupBox">
        <div className="popup">
            <div className="popupClose" onClick={e => { changePatchUserPopupActive(false) }}>x</div>
            <Form onSubmit={onSubmit}>
                <Form.Group>
                    <Form.Label>First name </Form.Label>
                    <Form.Control
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last name </Form.Label>
                    <Form.Control
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Patronymic </Form.Label>
                    <Form.Control
                        type="text"
                        value={patronymic}
                        onChange={e => setPatronymic(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>About </Form.Label>
                    <Form.Control
                        type="text"
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Avatar </Form.Label>
                    <Form.Control
                        type="text"
                        value={avatar}
                        onChange={e => setAvatar(e.target.value)}
                    />
                </Form.Group>
                <Button variant="warning" type="submit" >Submit</Button>
            </Form>
        </div>
    </div>
}