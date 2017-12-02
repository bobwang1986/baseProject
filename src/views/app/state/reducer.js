import { ON_SUBMIMT } from '../actions/login'
const initialState = {userName: 'leo', password: '123456'}
const login = (state = initialState, action) => {
    switch (action.type) {
        case ON_SUBMIMT:
            return {...state, payload:action.payload}
        default:
            return state
    }
}
export default login
