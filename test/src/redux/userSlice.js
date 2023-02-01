import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const getUsersAsync = createAsyncThunk(
    'users/getUsersAsync',
    async () => {
        const resp = await fetch('http://localhost:7000/users');
        if (resp.ok) {
            const users = await resp.json();
            return { users };
        }
    }
);

export const addUserAsync = createAsyncThunk(
    'users/addUserAsync',
    async (payload) => {
        const resp = await fetch('http://localhost:7000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                createDate: payload.createDate,
                avatar: payload.avatar,
                firstName: payload.firstName,
                lastName: payload.lastName,
                patronymic: payload.patronymic,
                email: payload.email,
                about: payload.about,
            }),
        });

        if (resp.ok) {
            const user = await resp.json();
            return { user };
        }
    }
);

export const deleteUserAsync = createAsyncThunk(
    'users/deleteUserAsync',
    async (payload) => {
        const resp = await fetch(`http://localhost:7000/todos/${payload.id}`, {
            method: 'DELETE',
        });

        if (resp.ok) {
            return { id: payload.id };
        }
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            const user = {
                id: nanoid(),
                createDate: action.payload.createDate,
                avatar: action.payload.avatar,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                patronymic: action.payload.patronymic,
                email: action.payload.email,
                about: action.payload.about,
            };
            state.push(user);
        },
        deleteUser: (state, action) => {
            return state.filter((user) => user.id !== action.payload.id);
        },
    },
    extraReducers: {
        [getUsersAsync.fulfilled]: (state, action) => {
            return action.payload.users;
        },
        [addUserAsync.fulfilled]: (state, action) => {
            state.push(action.payload.user);
        },
        [deleteUserAsync.fulfilled]: (state, action) => {
            return state.filter((user) => user.id !== action.payload.id);
        },
    },
});

export const { addUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;