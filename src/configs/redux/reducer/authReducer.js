const initialState = {
    id: '',
    email: '',
    role: '',
    fullName: '',
    isLoading: false,
    error: null
}
export const authReducer =(state=initialState, action)=>{
    switch (action.type) {
        case 'SET_AUTH_PENDDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SET_AUTH_SUCCESS':
        return{
            ...state,
            email: action.payload.email,
            fullName:action.payload.fullname,
            role: action.payload.role,
            id: action.payload.id,
            isLoading: false
        }
        case 'SET_AUTH_ERROR': {
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        }
        case 'SET_LOGIN':
        return {
            ...state,
            email: action.payload.email,
            password: action.payload.password
        }
        default:
            return state
    }
    
}
export default authReducer
