import React, { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { getProductDetail } from '../../configs/redux/action/productAction'
import {useDispatch, useSelector} from 'react-redux'

const DetailProduct = () => {
    const dispatch = useDispatch()
    const {detail} = useSelector((state)=> state.product)
    const {id} = useParams()
    useEffect(()=>{
        dispatch(getProductDetail(id))
    },[])
  return (
    <div>
        <h1>detail product {id}</h1>

        <ul>
            <li>name : {detail.name}</li>
            <li>description: {detail.description}</li>
            <li>description: {detail.price}</li>
        </ul>
    </div>
  )
}

export default DetailProduct