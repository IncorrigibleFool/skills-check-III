import {createStore} from 'redux'

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: 0,
    rent: 0
}

export const STEP1 = 'STEP1'
export const STEP2 = 'STEP2'
export const STEP3 = 'STEP3'

function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case STEP1:
            return {
                ...state, 
                name: payload.name, 
                address: payload.address, 
                city: payload.city,
                state: payload.state,
                zip: payload.zip
            }
        case STEP2:
            return {
                ...state,
                img: payload.img
            }
        case STEP3:
            return {
                ...state,
                mortgage: payload.mortgage,
                rent: payload.rent
            }
        default:
            return state
    }
}

export default createStore(reducer)