import {GET_USERS,DELETE_USER,ADD_USER,GET_USER} from '../actions/types'

const initialState={
  users:[],
  user:{}
}

export default function (state = initialState, action){
  switch(action.type){
    case GET_USERS:
    return{
      ...state,
      users:action.payload
    }
    case GET_USER:
    return{
      ...state,
      user:action.payload
    }
    case DELETE_USER:
    return{
      ...state,
      users:state.users.filter(user=>user.key!==action.payload)
    }
    case ADD_USER:
    return{
      ...state,
      users:[action.payload,...state.users]
    }
    default:
    return state;
  }
}