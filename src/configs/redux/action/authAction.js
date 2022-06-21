// import {getDay} from '../../../helpers/common'
import axios from 'axios'
export const login = (data,navigate)=> async (dispatch)=>{
    try {
        dispatch({type: 'SET_AUTH_PENDDING'})
        const {data: respData} = await axios.post('http://localhost:4000/v1/users/login',data)
        dispatch({type: 'SET_AUTH_SUCCESS', payload: respData.data})
        localStorage.setItem('token', respData.data.token)
        localStorage.setItem('refreshToken', respData.data.refreshToken)
        navigate('/home')
    } catch (error) {
        dispatch({type: 'SET_AUTH_ERROR',payload: error.response})
    }
   
}