import { LIST_USERS_REQUEST } from '../actions/user'

export default (state="", {type}) => {
    switch(type){
        case LIST_USERS_REQUEST:
            return LIST_USERS_REQUEST;
        default:
            return state;
    }
}