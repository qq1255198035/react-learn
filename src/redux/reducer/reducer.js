import { type } from "../action/action"

const initalState = {
    name: 'Home',
    id: ''
}

export default (state = initalState,action) => {
    switch(action.type){
        case type.MENU :
            return{
                ...state,
                name: action.name
            }
        default : return state
    }
}