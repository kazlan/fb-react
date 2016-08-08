import { DISPLAY_MESSAGE } from '../actions'

const initialState = {
    message: ""
}
export const changeme = (state=initialState, {type, payload})=>{

    switch(type){

        case DISPLAY_MESSAGE:
            return Object.assign({}, state, {message: payload})
        
        default:
            return state
    }
}