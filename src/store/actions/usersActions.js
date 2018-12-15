import {GET_USERS, DELETE_USER, ADD_USER, GET_USER} from './types'
import axios from 'axios'

export const getUsers = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    var json = JSON.parse(JSON.stringify(res.data).split('"id":').join('"key":'));
    dispatch({type: GET_USERS, payload: json});

};

export const deleteUser = (key) => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/users/${key}`);
        dispatch({type: DELETE_USER, payload: key});
    } catch (e) {
        dispatch({type: DELETE_USER, payload: key});
    }

};

export const addUser = (user) => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', user);
    dispatch({type: ADD_USER, payload: res.data});
};

export const getUser= (key) => async dispatch => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${key}`);
  var json = JSON.parse(JSON.stringify(res.data).split('"id":').join('"key":'));
  dispatch({type: GET_USER, payload: json});

};