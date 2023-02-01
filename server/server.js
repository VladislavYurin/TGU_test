const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const cors = require('cors');
const { json } = require('body-parser');
const { nanoid } = require('nanoid');

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let users = [
    {
        id: nanoid(),
        createDate: "2021-07-04T13:33:03.969Z",
        avatar: "https://img2.goodfon.ru/original/1024x768/6/9a/evropeyskaya-koshka-dikiy-kot.jpg",
        firstName: "Yurin",
        lastName: "Vladislav",
        patronymic: "Dmitrievich",
        email: "vlad.yurin98@gmail.com",
        about: "junior frontend developer"
    },
    {
        id: nanoid(),
        createDate: "2020-07-04T13:33:03.969Z",
        avatar: "https://img2.goodfon.ru/original/1024x768/6/9a/evropeyskaya-koshka-dikiy-kot.jpg",
        firstName: "Ivanov",
        lastName: "Ivan",
        patronymic: "Ivanovich",
        email: "ivan.ivanov@gmail.com",
        about: "junior frontend developer"
    },
    {
        id: nanoid(),
        createDate: "2019-07-04T13:33:03.969Z",
        avatar: "https://img2.goodfon.ru/original/1024x768/6/9a/evropeyskaya-koshka-dikiy-kot.jpg",
        firstName: "Petrov",
        lastName: "Petr",
        patronymic: "Petrovich",
        email: "petr.petrov@gmail.com",
        about: "junior frontend developer"
    },
    {
        id: nanoid(),
        createDate: "2018-07-04T13:33:03.969Z",
        avatar: "https://img2.goodfon.ru/original/1024x768/6/9a/evropeyskaya-koshka-dikiy-kot.jpg",
        firstName: "Vasiliev",
        lastName: "Vasiliy",
        patronymic: "Vasilievich",
        email: "vasya@gmail.com",
        about: "junior frontend developer"
    }
];

app.get('/users', (req, res) => res.send(users));

app.post('/users', (req, res) => {
    const todo = { title: req.body.title, id: nanoid(), completed: false };
    const user = {
        id: nanoid(),
        createDate: req.body.createDate,
        avatar: req.body.avatar,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        patronymic: req.body.patronymic,
        email: req.body.email,
        about: req.body.about,
    };

    users.push(user);
    return res.send(user);
});

app.patch('/user/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((user) => users.id == id);
    const completed = Boolean(req.body.completed);
    if (index > -1) {
        users[index].completed = completed;
    }
    return res.send(users[index]);
});

app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const index = users.findIndex((user) =>user.id == id);
    if (index > -1) {
        users.splice(index, 1);
    }

    res.send(users);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.green.bold));