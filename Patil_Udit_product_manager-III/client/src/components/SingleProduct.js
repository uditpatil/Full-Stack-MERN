import axios from 'axios';
import React, { useState, useEffect,  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = (props) =>{
    const {id} = useParams();
    const navigate = useNavigate();
    const [oneProduct, setOneProduct] = useState({});
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => setOneProduct(res.data))
            .catch(err => console.log(err))

    },[id])

    const deleteFilter = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => navigate("/"))
            .catch(err => console.log(err))
    }
        return  (
            <div className="single-product">
                <h2>{oneProduct.title}</h2>
                <p>{oneProduct.price}</p>
                <p>{oneProduct.description}</p>
                <button onClick={deleteFilter} className="buton">Delete</button>
            </div>
    )
}

export default SingleProduct;