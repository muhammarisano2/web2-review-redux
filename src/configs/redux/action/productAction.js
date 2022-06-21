import axios from 'axios'
export const getProduct=()=>async(dispatch)=>{
    dispatch({type: 'SET_PRODUCT_PENDDING'})
    const {data: dataResponse} = await axios.get('http://localhost:4000/v1/products')
    dispatch({type: 'SET_PRODUCT_SUCCESS', payload: dataResponse})
}
export const getProductDetail=(id)=>async(dispatch)=>{
    dispatch({type: 'SET_DETAIL_PENDDING'})
    const {data:dataResponse} = await axios.get(`http://localhost:4000/v1/products/${id}`)
    dispatch({type: 'SET_DETAIL_SUCCESS', payload: dataResponse.data})
}
const addToCard = (data)=>{
    const product= {
        ...data,
        quantity: 1
    }

    return {type: 'ADD_TO_CARD', payload: product}

}