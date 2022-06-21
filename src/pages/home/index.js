import React, { useEffect } from "react";
import { getProduct } from "../../configs/redux/action/productAction";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const { data, isLoading, pagination } = useSelector((state) => state.product);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <div className="container">
      <h1>page home</h1>
      {isLoading && <h1>loadingg....</h1>}
      <div className="row">
        {data.map((item) => (
          <div className="col-md-3">
            <div className="card" onClick={()=>navigate(`/detail/${item.id}`)}>
              <img src={item.photo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <a href="/" className="btn btn-primary">
                  {item.price}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
